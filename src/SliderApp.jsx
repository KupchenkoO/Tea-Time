import React from 'react';
import Slider from './Slider'; // Предполагается, что вы создали компонент Slider.js как указано в предыдущем ответе

function SliderApp() {
  const items = [
    {
      title: 'Blue Tea',
      description: 'Proin mi ex, aliquet ut velit sed, sollicitudin fermentum diam. Nullam lobortis aliquet est, eu tempus leo tempus in. Suspendisse quam leo, facilisis eu cursus ut, luctus non leo.',
      image: '112.jpg',
    },
    {
      title: 'Pink Tea',
      description: 'Aliquam luctus ullamcorper lacinia. Mauris rhoncus nibh in vestibulum pretium. Duis congue, augue ac tempus faucibus, ex sem consequat nisi, vel molestie libero neque ut eros. Sed egestas, libero sit amet eleifend mollis, ipsum est iaculis enim, sit amet porttitor ipsum magna eu lacus.',
      image: '11.jpg',
    },
    {
      title: 'Yellow Tea',
      description: 'Suspendisse posuere aliquam leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet convallis orci. Donec et enim a arcu euismod tristique. Pellentesque vel erat risus.',
      image: '1123.jpg',
    },
  ];

  return (
    <div className="SliderApp">
      <div className='parallax-img'></div>
      <Slider items={items} />
    </div>
  );
}

export default SliderApp;