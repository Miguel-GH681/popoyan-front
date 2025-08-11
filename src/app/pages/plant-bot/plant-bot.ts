import { Component, OnInit } from '@angular/core';
import { Chat } from '../../core/models/chat';
import { Message } from '../../core/models/message';
import { Api } from '../../core/service/api';

@Component({
  selector: 'app-plant-bot',
  standalone: false,
  templateUrl: './plant-bot.html',
  styleUrl: './plant-bot.css'
})
export class PlantBot implements OnInit{
  chats: Chat[] = [{ id_chat: 0, messages: [] }];
  selectedChatIndex : number = 0;
  newMessage : string = '';

  constructor(private apiService : Api ){}

  ngOnInit(): void {
    this.loadChats();
  }

  loadChats(){
    this.apiService.getChats().subscribe((chats : any)=>{
      this.chats = chats;
      this.selectChat(0);
    });
  }

  newChat(){
    this.apiService.postChat({title: `Chat ${this.chats.length + 1}`}).subscribe((res : any)=>{
      this.chats.push({id_chat: res.id_chat, messages: []})
    });
  }
  
  deleteChat(index : number){
    this.apiService.deleteChat(this.chats[index].id_chat).subscribe((res:any)=>{
      this.chats.splice(index, 1);
      this.selectChat(0);
    });
  }

  get currentChat() {
    return this.chats[this.selectedChatIndex];
  }

  sendMessage(){
    if (!this.newMessage.trim()) return;
      const userMessage : Message = {
        chat_role: 'user', 
        content: this.newMessage, 
        id_chat: this.currentChat.id_chat
      };
      this.currentChat.messages.push(userMessage);
      this.apiService.postMessage(userMessage).subscribe((assistantMessage:any)=>{
        this.currentChat.messages.push(assistantMessage);
      });
      this.newMessage = '';
  }

  selectChat(index: number) {
    this.selectedChatIndex = index;
    this.apiService.getMessages(this.chats[index].id_chat).subscribe((messages : any)=>{
      console.log({messages});
      
      this.chats[index].messages = messages;
    })
  }
}
