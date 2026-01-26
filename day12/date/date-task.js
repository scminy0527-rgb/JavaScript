function timeForDate(datetime) {
  // 현재 날짜
  const today = new Date();
  // db의 날짜
  const date = new Date(datetime);

  // 1분 단위로 표시
  let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

  if (gap < 1) {
    return "방금 전";
  }

  if (gap < 60) {
    return `${gap}분 전`;
  }
  // 시간이 될 예정
  gap = Math.floor(gap / 60);

  if (gap < 24) {
    return `${gap}시간 전`;
  }

  gap = Math.floor(gap / 24);
  if (gap < 31) {
    return `${gap}일 전`;
  }

  gap = Math.floor(gap / 31);
  if (gap < 13) {
    `${gap}개월 전`;
  }

  gap = Math.floor(gap / 12);
  return `${gap}년 전`;
}

console.log(timeForDate("2023-01-26"));
console.log(timeForDate("2025-08-26"));
console.log(timeForDate("2026-01-10"));
console.log(timeForDate("2026-01-26 09:00"));
console.log(timeForDate("2026-01-26 10:30"));
