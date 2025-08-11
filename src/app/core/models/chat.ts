import { Message } from "./message";

export interface Chat {
    id_chat: number;
    messages: Message[];
}