// import React, { useRef, useEffect, useState } from 'react';
// import { CardUI } from '../../components/Card';

// // Define interface for card data
// interface CardData {
//   id: number;
//   title: string;
//   content: string;
// }

// const VerticalScrollCards = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [isScrolling, setIsScrolling] = useState(true);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
    
//     if (!scrollContainer) return;

//     const scrollHeight = scrollContainer.scrollHeight;
//     const clientHeight = scrollContainer.clientHeight;
//     const maxScroll = scrollHeight - clientHeight; // Stop exactly when last card is fully in view

//     const scrollAnimation = () => {
//       if (!isScrolling) return;

//       if (scrollContainer.scrollTop < maxScroll) {
//         scrollContainer.scrollTop += 2; // Slow scroll speed
//       } else {
//         // Stop scrolling when last card is fully in view
//         setIsScrolling(false);
//       }
//     };

//     // Use setInterval for a slow, consistent scroll
//     const scrollInterval = setInterval(scrollAnimation, 50);

//     // Cleanup interval on component unmount
//     return () => clearInterval(scrollInterval);
//   }, [isScrolling]);

//   // Sample card data with explicit typing
//   const cards: CardData[] = [
//     { id: 1, title: "First Card", content: "Content for first card" },
//     { id: 2, title: "Second Card", content: "Content for second card" },
//     { id: 3, title: "Third Card", content: "Content for third card" },
//     { id: 4, title: "Fourth Card", content: "Content for fourth card" },
//     { id: 5, title: "Fifth Card", content: "Content for fifth card" },
//     { id: 6, title: "Sixth Card", content: "Content for sixth card" }
//   ];

//   return (
//     <div className="flex flex-col items-center p-4">
//       <div 
//         ref={scrollContainerRef}
//         className="w-64 h-screen overflow-y-scroll scrollbar-hide rounded-lg shadow-lg"
//         style={{ 
//           scrollBehavior: 'smooth',
//           overscrollBehavior: 'contain'
//         }}
//       >
//         {cards.map((card) => (

//             <CardUI cardNumber={card.id}/>

//         ))}
//       </div>
//       <div className="mt-4 flex items-center text-gray-500">
//         <span>Slowly scrolling cards</span>
//       </div>
//     </div>
//   );
// };

// export default VerticalScrollCards;