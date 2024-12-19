import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="px-3 xl:px-0 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center md:text-left gap-8 text-gray-600 mt-10">
          <div className="space-y-4 text-lg">
            <p className="font-semibold cursor-pointer hover:opacity-80">Контактная информация</p>
            <p className="cursor-pointer hover:opacity-80">+7 (727) 310-37-59</p>
            <p className="cursor-pointer hover:opacity-80">mebel@mail.ru</p>
            <p className="cursor-pointer hover:opacity-80">Задать вопрос</p>
            <p className="cursor-pointer hover:opacity-80">Контакты</p>
          </div>

          <div className="space-y-4">
            <p className="font-semibold cursor-pointer hover:opacity-80">Каталог для покупателей</p>
            <p className="cursor-pointer hover:opacity-80">Мягкая мебель</p>
            <p className="cursor-pointer hover:opacity-80">Столы и стулья</p>
            <p className="cursor-pointer hover:opacity-80">Обращение в отдел качества</p>
            <p className="cursor-pointer hover:opacity-80">О конструкторе</p>
          </div>

          <div className="space-y-4">
            <p className="font-semibold">Информация для покупателей</p>
            <p className="cursor-pointer hover:opacity-80">О компании</p>
            <p className="cursor-pointer hover:opacity-80">Адреса магазинов</p>
            <p className="cursor-pointer hover:opacity-80">Доставка и оплата</p>
            <p className="cursor-pointer hover:opacity-80">Мы в соц. сетях</p>
            <div className="flex space-x-3 md:justify-start justify-center items-center">
              <FaInstagram className="text-3xl p-1 border rounded-full cursor-pointer transition duration-150 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-white" />
              <FaYoutube className="text-3xl p-1 border rounded-full cursor-pointer transition duration-150 hover:bg-[#FF0000] hover:text-white" />
              <FaTelegramPlane className="text-3xl p-1 border rounded-full cursor-pointer transition duration-150 hover:bg-[#229ED9] hover:text-white" />
              <FaTiktok className="text-3xl p-1 border rounded-full cursor-pointer transition duration-150 hover:bg-black hover:text-white" />
              <FaFacebookF className="text-3xl p-1 border rounded-full cursor-pointer transition duration-150 hover:bg-[#3b5998] hover:text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-semibold cursor-pointer hover:opacity-80">Режим работы call-центра</p>
            <p className="cursor-pointer hover:opacity-80">ежедневно с 11:00 до 00:00</p>
            <p className="font-semibold cursor-pointer hover:opacity-80">Доставка заказов</p>
            <p className="cursor-pointer hover:opacity-80">ежедневно с 9:00 до 23:00</p>
          </div>
        </div>

        <p className="text-gray-500 text-xs md:text-sm mt-10 text-center md:text-left ">
          © ТОО «FurniLand.kz», 2024. Все ресурсы сайта, включая (но не ограничиваясь) текстовую, графическую, 
          фотографическую и видео информацию, структуру, дизайн и оформление страниц, товарные знаки, доменное имя, 
          фирменное наименование являются объектами авторского права и прав на интеллектуальную собственность, 
          защищены российским законодательством и международными соглашениями об охране авторских прав и интеллектуальной собственности.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
