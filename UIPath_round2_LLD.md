
// Question: Design a Real-Time Collaborative Kanban Board like Trello
// Design a React-based Kanban board application that allows multiple users to collaborate in real-time with the following features:
// Requirements:
// 1. Display multiple columns (e.g., "To Do", "In Progress", "Done")
// 2. Create, edit, and delete task cards
// 3. Drag and drop cards between columns
// 4. Support real-time collaboration (multiple users see changes instantly)
// 5. Track card history and user activities(who updated,)
// 6. Filter and search functionality (title seacrch, or description)
// 7. User presence indicators (show who's currently viewing the board)
//  card

<KanbanBoard>
    <KanbanBoardHeader  
    //  search, filter, createCard ,showActiveUsers
     />
    <ColumnLIst /
        <ListCard/
            <card>
            <card>
            <card>
        >
    
    >
    <createCard 
        // add new card to my app state
    />
    <CreateCardForm />
    <FilterComponet />
    <showActiveUsers />
<KanbanBoard / >

const BoardData={
    id:"boardId",
    BoardColumns:{
        toDo:[card1,card2],
        inProgress:[card3],
        toDo:[card4]
    },
    showActiveUsers:["usr1","user31"];
    filter:{
        title:"",
        description:"",
        status:"",
        assigne:""
    }
    
    
    
    
    
    
    
    
}
    