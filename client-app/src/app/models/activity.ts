//App.tsx에서 state로 쓰일 activity의 타입을 지정해주는 인터페이스!
export interface IActivity {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  city: string;
  venue: string;
}
