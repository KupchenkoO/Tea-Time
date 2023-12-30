import './App.css';
import Menu from './Menu';
import Info from './Info';
import Block from './Block';
import Plant from './Plant'
import SliderApp from './SliderApp';


function App() {
  const handleButtonClick = () => {
    alert('Button Clicked!');
  }

  return (
    <div className="App">
      <Menu />
      <Info
        imageUrl="./tea.png"
        text="Tea Time"
        buttonText="MORE"
        onClickButton={handleButtonClick}
      />
    
      <div className='cart-block'>
      <Block
        image="./1.jpg"
        title="Flower Tea"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis magna imperdiet ex pellentesque, eget mollis tellus venenatis. Quisque porttitor, metus id malesuada pellentesque, quam lorem venenatis odio, quis semper risus elit et dolor."
      />
      <Block
        image="./2.jpg"
        title="Black Tea"
        text="Proin mi ex, aliquet ut velit sed, sollicitudin fermentum diam. Nullam lobortis aliquet est, eu tempus leo tempus in. Suspendisse quam leo, facilisis eu cursus ut, luctus non leo."
      />
      <Block
        image="./3.jpg"
        title="Green Tea"
        text="Aliquam luctus ullamcorper lacinia. Mauris rhoncus nibh in vestibulum pretium. Duis congue, augue ac tempus faucibus, ex sem consequat nisi, vel molestie libero neque ut eros. Sed egestas, libero sit amet eleifend mollis, ipsum est iaculis enim, sit amet porttitor ipsum magna eu lacus."
      /></div>


      <div className='cart-block'>
      <Block
        image="./1.jpg"
        title="Flower Tea"
        text="Nunc euismod magna quis dui vulputate, et molestie mauris placerat. Etiam gravida orci et lectus rutrum tincidunt. Sed sollicitudin mauris ut nunc fermentum consequat. Curabitur id porta odio, fringilla aliquam velit. Mauris et pretium magna."
      />
      <Block
        image="./2.jpg"
        title="Black Tea"
        text="Suspendisse posuere aliquam leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet convallis orci. Donec et enim a arcu euismod tristique. Pellentesque vel erat risus."
      />
      <Block
        image="./3.jpg"
        title="Green Tea"
        text="Sed scelerisque lectus diam, nec elementum diam commodo vel. Vivamus nec augue fringilla, ornare metus nec, pulvinar purus. Sed vel leo ex. Sed pretium neque sapien, sed fringilla lacus pharetra ut. Sed a velit dui. Duis dignissim tristique ex."
      /></div>

      <Plant
        imageUrl="./plant.jpg"
        title="Plantation"
        text="Aliquam luctus ullamcorper lacinia. Mauris rhoncus nibh in vestibulum pretium. Duis congue, augue ac tempus faucibus, ex sem consequat nisi, vel molestie libero neque ut eros. Sed egestas, libero sit amet eleifend mollis, ipsum est iaculis enim, sit amet porttitor ipsum magna eu lacus."
        buttonText="MORE"
        onClickButton={handleButtonClick}
      />
      <SliderApp />
    </div>
  );
}

export default App;