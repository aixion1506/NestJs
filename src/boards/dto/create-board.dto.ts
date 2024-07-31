import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({
    required: true,
    type: String,
    description: '보드 제목입니다',
    example: '오늘도 라니쿤! 제목',
    default: '제목없음',
    minimum: 3,
  })
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
