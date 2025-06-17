// app/page.jsx
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <>
//     </>
//   );
// }
// app/page.jsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/auth/signin');
}