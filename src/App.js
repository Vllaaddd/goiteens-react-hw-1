import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Message from "./components/Message";

export default function App() {
  return (
    <>
      <Greeting name={'Іван'} />
      <Message text={'Повідомлення'} />
      <Button onClick={() => console.log('Повідомлення')} />
    </>
  );
}