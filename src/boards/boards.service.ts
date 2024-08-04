import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.repository';
// import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  // 게시물 생성
  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  // 특정 ID 조회
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) throw new NotFoundException(`Can't find Board with id ${id}`);

    return found;
  }

  // 특정 ID 삭제
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0)
      throw new NotFoundException(`Can't find Board with id ${id}`);

    console.log('result ->', result);
  }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
