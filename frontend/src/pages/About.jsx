import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img}/>
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
         <p>Shopix is a leading online retailer offering a wide range of products at competitive prices. Our mission is to provide an exceptional shopping experience with fast delivery and outstanding customer service.</p>
         <p>Since our founding, we have been committed to delivering quality products and exceptional service to our customers.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Our mission is to be the most trusted and beloved shopping destination for our customers.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>All our products undergo rigorous testing to ensure they meet the highest quality standards.</p>
        </div>

        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>With our user-friendly interface and seamless shopping experience, we make it easy for you to find and purchase the products you love.</p>
        </div>


        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our dedicated customer service team is always ready to assist you with any questions or concerns you may have.</p>
        </div>



      </div>

      <NewsletterBox/>

    </div>
  );
};

export default About;