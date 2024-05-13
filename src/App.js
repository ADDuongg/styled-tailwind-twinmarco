import React, { useState } from 'react';
import bgService from './images/bgService.png';
import picService1 from './images/picService1.png';
import picService2 from './images/picService2.png';
import picService3 from './images/picService3.png';
import picService4 from './images/picService4.png';
import picService5 from './images/picService5.png';
import picService6 from './images/picService6.png';
import picService7 from './images/picService7.png';
import picService8 from './images/picService8.png'
import Header from './component/header.tsx';
import Footer from './component/footer.tsx';
import { ItemServiceContainer, Button, Container, Content, ContentContainer, Image, SubTitle, Title } from './twinmarco/service/service.jsx';

const App = () => {
  const [accordionState, setAccordionState] = useState({});

  const handleAccordionClick = (index) => {

    setAccordionState(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  const dataHome2 = {
    title: "Best responsibility and service for our customers",
    subTitle: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  }
  const imgs = [
    { img: picService1 },
    { img: picService2 },
    { img: picService3 },
    { img: picService4 },
  ]
  const accordion = [
    { title: "Is beauty consultation handled thoroughly?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla" },
    { title: "Can I be beautiful in an instant time?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla" },
    { title: "Are there any side effects to the treatment methods or treatments at this clinic?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla" },
    { title: "Do professionals have accreditation in their respective fields?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla" },

  ]
  const itemServices = [
    { img: picService5, title: "Beauty Consultation", subTitle: "We services beauty consultation", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero." },
    { img: picService6, title: "Skin Treatements", subTitle: "Skin care and treatment by expert", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero." },
    { img: picService7, title: "Beauty Product", subTitle: "We present quality beauty products", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero." }
  ]
  return (
    <>
      <Header />
      <div className='relative w-full h-100 mt-60' style={{ backgroundImage: `url(${bgService})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='absolute md:top-96 top-3/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4/5'>
          <div className='flex flex-col items-center '>
            <div className='text-colorPink font-bold'>Our Services</div>
            <div className='text-colorPurple font-bold text-3xl my-5'>We focus on your beauty</div>
            <div className='text-colorGray '>Lorem ipsum dolor sit amet</div>
          </div>

          <div id="imageService" className='grid md:grid-cols-3 auto-rows-[250px] w-full gap-16  mb-10'>
            {imgs?.map((item, index) => (
              <div className={`w-full h-full ${index === 1 || index === 2 ? 'md:col-span-2' : ''}`}>
                <img src={item.img} alt="" className='w-full h-full' />
              </div>
            ))}
          </div>

        </div>
      </div>

      <div id='itemService'>
        {itemServices?.map((item, index) => (
          <ItemServiceContainer indx={index}>
            {index % 2 === 0 ? (
              <>
                <Container>
                  <Image src={item.img} alt="" />
                </Container>
                <ContentContainer type={"odd"}>
                  <Title>{item.title}</Title>
                  <SubTitle>{item.subTitle}</SubTitle>
                  <Content>{item.content}</Content>
                  <div className='md:justify-start flex justify-center mt-4 w-full'>
                    <Button>Make an Appointment <i class="fa-solid fa-angles-right text-colorPink font-bold ml-3 text-xl"></i></Button>
                  </div>
                </ContentContainer>
              </>
            ) : (
              <>
                <ContentContainer type={"even"} >
                  <Title type={"even"} >{item.title}</Title>
                  <SubTitle type={"even"} >{item.subTitle}</SubTitle>
                  <Content className='text-colorGray md:text-start text-center w-full'>{item.content}</Content>
                  <div className='md:justify-start flex justify-center mt-4 w-full'><button className='text-colorPurple font-bold flex items-center'>Make an Appointment <i class="fa-solid fa-angles-right text-colorPink font-bold ml-3 text-xl"></i></button></div>
                </ContentContainer>
                <div className='flex md:justify-start justify-center items-center md:mt-0 mt-20 h-full'>
                  <img src={item.img} alt="" className='w-4/6 h-3/4 ' />
                </div>
              </>
            )}
          </ItemServiceContainer>
        ))}
      </div>


      <div id='divPicService8' className='w-full h-98 relative md:mt-0 mt-14' style={{ backgroundImage: `url(${picService8})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className='divPicService8After absolute top-0 left-0 z-0 h-full w-full bg-bgPurple'></div>
        <div className='w-4/5 h-full z-20 absolute left-2/4 -translate-x-2/4 flex md:flex-row md:justify-between items-center flex-col justify-center'>
          <div id="content" className='md:w-6/12 w-full ' >
            <div className=" text-white font-bold text-3xl  leading-snug md:text-start text-center">{dataHome2.title}</div>
            <div className=" text-gray-300 mt-4 mb-10 font-bold  md:text-start text-center w-full">{dataHome2.subTitle}</div>

          </div>

          <div className='flex items-center'>
            <i className="fa-regular fa-circle-play text-9xl text-white shadow-lg"></i>
            <div className='text-white text-xl ml-6'>Treatment Videos</div>
          </div>
        </div>
      </div>

      <div className="divAccordion w-5/6 mx-auto md:py-20  pb-0">
        {accordion.map((item, index) => (
          <div key={index}>
            <div
              className="accordion flex w-full justify-between items-center p-4 cursor-pointer md:my-0 my-20"
              onClick={() => handleAccordionClick(index)}
            >
              <div className='text-colorPurple font-bold'>{item.title}</div>
              <i className={`fa-solid fa-angle-${accordionState[index] ? 'up' : 'down'} font-bold text-3xl text-colorPurple`}></i>
            </div>
            <div
              className={`text-colorGray italic border-t-blue-700 border-t-2 h-auto p-20 bg-blue-50 ${!accordionState[index] && 'hidden'}`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
