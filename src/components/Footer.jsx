import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='wrapper'>
        <footer>
          <div>
            <ul className='grid grid-cols-4 mt-32 text-gray-600'>
              <li className='space-y-5'>
                <p className='font-semibold cursor-pointer hover:opacity-80'>Контактная информации</p>
                <p className='cursor-pointer hover:opacity-80'>+7 (727) 310-37-59</p>
                <p className='cursor-pointer hover:opacity-80'>mebel@mail.ru</p>
                <p className='cursor-pointer hover:opacity-80'>Задать вопрос</p>
                <p className='cursor-pointer hover:opacity-80'>Контакты</p>
              </li>
              <li className='space-y-5'>
                <p className='font-semibold cursor-pointer hover:opacity-80'>Каталог для покупателей</p>
                <p className='cursor-pointer hover:opacity-80'>Мягкая мебель</p>
                <p className='cursor-pointer hover:opacity-80'>Столы и стулья</p>
                <p className='cursor-pointer hover:opacity-80'>Обращение в отдел качества</p>
                <p className='cursor-pointer hover:opacity-80'>О конструкторе</p>
              </li>
              

              <li className='space-y-5'>
                <p className='font-semibold'>Информация для покупателей</p>
                <p className='cursor-pointer hover:opacity-80'>О компании</p>
                <p className='cursor-pointer hover:opacity-80'>Адреса магазинов</p>
                <p className='cursor-pointer hover:opacity-80'>Доставка и оплата</p>
                <p className='cursor-pointer hover:opacity-80'>Мы в соц. сетях</p>
                <div className='flex space-x-2'>
                  <p><FaInstagram className='text-4xl p-1.5 border rounded-full cursor-pointer hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:text-white'/></p>
                  <p><FaYoutube className='text-4xl p-1.5 border rounded-full cursor-pointer hover:bg-[#FF0000] hover:text-white' /></p>
                  <p><FaTelegramPlane className='text-4xl p-1.5 border rounded-full cursor-pointer hover:bg-[#229ED9] hover:text-white'/></p>
                  <p><FaTiktok className='text-4xl p-1.5 border rounded-full cursor-pointer hover:bg-black hover:text-white' /></p>
                  <p><FaFacebookF className='text-4xl p-1.5 border rounded-full cursor-pointer hover:bg-[#3b5998] hover:text-white' /></p>
                </div>
              </li>
              <li className='space-y-5'>
                <p className='font-semibold cursor-pointer hover:opacity-80'>Режим работы call-центрa </p>
                <p className='cursor-pointer hover:opacity-80'>ежедневно с 11:00 до 00:00</p>
                <p className='font-semibold cursor-pointer hover:opacity-80'>Доставка заказов</p>
                <p className='cursor-pointer hover:opacity-80'>ежедневно с 9:00 до 23:00</p>
              </li>
            </ul>




          </div>

          <p className='text-gray-500 text-sm mt-16'>
              © ТОО «FurniLand.kz», 2024. Все ресурсы сайта, включая (но не ограничиваясь) текстовую, графическую, фотографическую и видео информацию, структуру, дизайн и оформление страниц, товарные знаки, доменное имя, фирменное наименование являются объектами авторского права и прав на интеллектуальную собственность, защищены российским законодательством и международными соглашениями об охране авторских прав и интеллектуальной собственности.
              Запрещается любое воспроизведение, в том числе использование, копирование, включение содержания страниц данного сайта и иных объектов в структуру других сайтов без предварительного согласия правообладателя. Запрещаются любые иные действия, в результате которых у пользователей Интернета может сложиться впечатление, что представленные материалы не имеют отношения к домену www.furniland.kz.
          </p>
        </footer>
    </div>
  )
}

export default Footer