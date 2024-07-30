import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
  // {
  //   "id": "09614540-4e4e-11ef-a0b8-97c2ec39f826",
  //   "title": "Board 1",
  //   "description": "Description 1",
  //   "status": "PUBLIC"
  // }
}
