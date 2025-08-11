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
    });
  }

  get currentChat() {
    return this.chats[this.selectedChatIndex];
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;
      this.currentChat.messages.push({chat_role: '', content: '', id_chat: 2});
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
