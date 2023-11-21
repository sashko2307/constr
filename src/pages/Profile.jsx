import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

import photo from "../assets/img/logo.svg";

const Profile = () => {
    return (
        <div className='profile container-fluid flex '>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='content min-h-screen'>
                <div className='content_wrap'>
                    <div class='border-b border-gray-200 dark:border-gray-700'>
                        <nav
                            class='flex space-x-2'
                            aria-label='Tabs'
                            role='tablist'
                        >
                            <button
                                type='button'
                                class='justify-center flex-grow hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active'
                                id='tabs-with-underline-item-1'
                                data-hs-tab='#tabs-with-underline-1'
                                aria-controls='tabs-with-underline-1'
                                role='tab'
                            >
                                Профіль
                            </button>
                            <button
                                type='button'
                                class='justify-center flex-grow hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500'
                                id='tabs-with-underline-item-2'
                                data-hs-tab='#tabs-with-underline-2'
                                aria-controls='tabs-with-underline-2'
                                role='tab'
                            >
                                Білінг
                            </button>
                            <button
                                type='button'
                                class='justify-center flex-grow hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500'
                                id='tabs-with-underline-item-3'
                                data-hs-tab='#tabs-with-underline-3'
                                aria-controls='tabs-with-underline-3'
                                role='tab'
                            >
                                Доступи
                            </button>
                        </nav>
                    </div>
                    <div class='mt-3'>
                        <div
                            id='tabs-with-underline-1'
                            role='tabpanel'
                            aria-labelledby='tabs-with-underline-item-1'
                        >
                            <div className='profile-card'>
                        <div className='profile-card__title font-bold p-2 text-2xl my-3'>
                            Персональна інформація
                        </div>
                        <div className='profile-card_img my-1'>
                            <img width='100' height='100' src={photo} alt='' />
                        </div>
                        <div className='profile-card_item'>
                            <div className='profile-card_ttl p-2 font-bold'>
                                Персональні дані
                            </div>
                            <div class='profile-card_row  max-w-sm flex items-center p-2'>
                                <label class='profile-card_label'>Ім'я</label>
                                <div class='relative flex-grow'>
                                    <input
                                        type='text'
                                        class='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                                        placeholder="Ім'я"
                                    />
                                </div>
                            </div>
                            <div class='profile-card_row  max-w-sm flex items-center p-2'>
                                <label class='profile-card_label'>
                                    Прізвище
                                </label>
                                <div class='relative flex-grow'>
                                    <input
                                        type='text'
                                        class='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                                        placeholder='Прізвище'
                                    />
                                </div>
                            </div>
                            <div class='profile-card_row  max-w-sm flex items-center p-2'>
                                <label class='profile-card_label'>Email</label>
                                <div class='relative flex-grow'>
                                    <input
                                        type='email'
                                        class='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                                        placeholder='Email'
                                    />
                                </div>
                            </div>
                            <div class='profile-card_row  max-w-sm flex items-center p-2'>
                                <label class='profile-card_label'>Пароль</label>
                                <div class='relative flex-grow'>
                                    <input
                                        id='hs-toggle-password'
                                        type='password'
                                        class='py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                                        placeholder='Enter password'
                                        value='12345qwerty'
                                    />
                                    <button
                                        type='button'
                                        data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                                        class='absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                                    >
                                        <svg
                                            class='flex-shrink-0 w-3.5 h-3.5 text-gray-400 dark:text-neutral-600'
                                            width='24'
                                            height='24'
                                            viewBox='0 0 24 24'
                                            fill='none'
                                            stroke='currentColor'
                                            stroke-width='2'
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                        >
                                            <path
                                                class='hs-password-active:hidden'
                                                d='M9.88 9.88a3 3 0 1 0 4.24 4.24'
                                            />
                                            <path
                                                class='hs-password-active:hidden'
                                                d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68'
                                            />
                                            <path
                                                class='hs-password-active:hidden'
                                                d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61'
                                            />
                                            <line
                                                class='hs-password-active:hidden'
                                                x1='2'
                                                x2='22'
                                                y1='2'
                                                y2='22'
                                            />
                                            <path
                                                class='hidden hs-password-active:block'
                                                d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'
                                            />
                                            <circle
                                                class='hidden hs-password-active:block'
                                                cx='12'
                                                cy='12'
                                                r='3'
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='profile-card_item mt-2'>
                            <div className='profile-card_ttl p-2 font-bold'>
                                Мова та країна
                            </div>
                            <div class='profile-card_row  max-w-sm flex items-center p-2'>
                                <label class='profile-card_label'>
                                    Мова та країна
                                </label>
                                <div class='relative flex-grow'>
                                    <select class='py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'>
                                        <option selected>Україна</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>
                            <div class='profile-card_row  max-w-sm flex items-center p-2'>
                                <label class='profile-card_label'>Мова</label>
                                <div class='relative flex-grow'>
                                    <select class='py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'>
                                        <option selected>Україна</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class='button-block my-2 flex'>
                            <a href='#' class='button mr-3'>
                                Зберегти
                            </a>
                            <a href='#' class='button button--grey'>
                                Скасувати
                            </a>
                        </div>
                    </div>
                        </div>
                        <div
                            id='tabs-with-underline-2'
                            class='hidden'
                            role='tabpanel'
                            aria-labelledby='tabs-with-underline-item-2'
                        >
                            <p class='text-gray-500 dark:text-gray-400'>
                                This is the{" "}
                                <em class='font-semibold text-gray-800 dark:text-gray-200'>
                                    second
                                </em>{" "}
                                item's tab body.
                            </p>
                        </div>
                        <div
                            id='tabs-with-underline-3'
                            class='hidden'
                            role='tabpanel'
                            aria-labelledby='tabs-with-underline-item-3'
                        >
                            <p class='text-gray-500 dark:text-gray-400'>
                                This is the{" "}
                                <em class='font-semibold text-gray-800 dark:text-gray-200'>
                                    third
                                </em>{" "}
                                item's tab body.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className='sidebar2'>ey</div>
        </div>
    );
};

export default Profile;
