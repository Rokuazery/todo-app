import TodoWrapper from "./components/todo/TodoWrapper";

export const dateFormat = "MMM DD, YYYY h:mm A";
function App() {
  return (
    <div className="min-h-dvh max-h-dvh flex justify-center items-center bg-gray-100">
      <TodoWrapper />
    </div>
  );
}
export default App;
