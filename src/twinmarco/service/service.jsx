import styled from 'styled-components';
import tw from 'twin.macro';
export const ItemServiceContainer = styled.div`
  ${tw`grid md:grid-cols-2 md:auto-rows-[400px] auto-rows-[200px]`}
  ${props => props.indx === 0 ? tw`md:mt-0 mt-98` : tw`md:mt-0 mt-10`}
`;
export const Container = styled.div`
  ${tw`flex justify-center items-center`}
  
`;
export const Image = styled.img`
  ${tw`w-4/6 h-3/4 md:mt-0 mt-8`}
`;

export const ContentContainer = styled.div`
  ${props => props.type === "even" ? tw`w-full h-full md:pl-60 p-0 pt-16 flex flex-col` : tw`flex flex-col justify-center md:items-start items-center`}
`;

export const Title = styled.div`
  ${props => props.type === "even" ? tw`text-colorPink font-bold w-full md:text-start text-center` : tw`text-colorPink font-bold`}
`;


export const SubTitle = styled.div`
  ${props => props.type === "even" ? tw`text-colorPurple font-bold w-full text-4xl my-5 md:text-start text-center` :tw`text-colorPurple font-bold text-4xl my-5 md:w-2/4 w-full md:text-start text-center`}
`;
export const Content = styled.div`
  ${tw`text-colorGray md:w-3/5 w-full md:text-start text-center`}
`;

export const Button = styled.button`
  ${tw`text-colorPurple font-bold flex items-center`}
`;