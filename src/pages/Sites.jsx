import React from "react";

import icon_share from "../assets/img/share.svg";

const Sites = () => {
    return (
        <div className='profile container-fluid flex pl-260'>
            <div className='content min-h-screen'>
                <div className='content_wrap'>
                    <div class='border-b border-gray-200 dark:border-gray-700'>
                        <nav
                            class='tab-block flex space-x-2'
                            ariaLabel='Tabs'
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
                                Мої сайти (проєкти)
                            </button>
                            <button
                                type='button'
                                class='justify-center flex-grow hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500'
                                id='tabs-with-underline-item-2'
                                data-hs-tab='#tabs-with-underline-2'
                                aria-controls='tabs-with-underline-2'
                                role='tab'
                            >
                                Доступні сайти (мені відкрили доступ)
                            </button>
                        </nav>
                    </div>
                    <div class='tabs-content'>
                        <div
                            id='tabs-with-underline-1'
                            role='tabpanel'
                            ariaLabelledby='tabs-with-underline-item-1'
                        >
                            <div className='tabs-content_wrap flex'>
								
                                <div className='site-card'>
                                    <div className='site-card_wrap'>
                                        <div className='site-card_top'>
                                            <div className='site-card_ttl'>
                                                Сайт 1
                                            </div>
                                            <div className='site-card_descr'>
                                                Продаю суперкурс
                                            </div>
                                            <div class='button-block flex items-center'>
                                                <div className='site-card_status'>
                                                    Опубліковано
                                                </div>
                                                {/* <div className="site-card_status site-card_status--grey">Чернетка</div> */}
                                                <button class='button'>
                                                    <img
                                                        src={icon_share}
                                                        alt=''
                                                    />
                                                    Опублікувати
                                                </button>
                                            </div>
                                        </div>
                                        <div className='site-card_bot flex items-center justify-between'>
                                            <div className='site-card_link'>
                                                <a href='#' className='link'>
                                                    https://site1.linksite.cc
                                                </a>
                                            </div>
                                            <div className='site-card_event'>
                                                <div className='site-card_edit'>
                                                    edit
                                                </div>
                                                <div className='site-card_edit site-card_edit--delete'>
                                                    delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
								</div>
								
                                <div className='site-card'>
                                    <div className='site-card_wrap'>
                                        <div className='site-card_top'>
                                            <div className='site-card_ttl'>
                                                Сайт 1
                                            </div>
                                            <div className='site-card_descr'>
                                                Продаю суперкурс
                                            </div>
                                            <div class='button-block flex items-center'>
                                                {/* <div className="site-card_status">Опубліковано</div> */}
                                                <div className='site-card_status site-card_status--grey'>
                                                    Чернетка
                                                </div>
                                                <button class='button'>
                                                    <img
                                                        src={icon_share}
                                                        alt=''
                                                    />
                                                    Опублікувати
                                                </button>
                                            </div>
                                        </div>
                                        <div className='site-card_bot flex items-center justify-between'>
                                            <div className='site-card_link'>
                                                <a href='#' className='link'>
                                                    https://site1.linksite.cc
                                                </a>
                                            </div>
                                            <div className='site-card_event'>
                                                <div className='site-card_edit'>
                                                    edit
                                                </div>
                                                <div className='site-card_edit site-card_edit--delete'>
                                                    delete
                                                </div>
                                            </div>
                                        </div>
                                    </div>
								</div>
								
								<div className="input-block mt-5 mb-5">
									<div className="input-block_http">
										https://
									</div>
									<div className="input-block_input">
										<input type="text" placeholder="sitename.linksite.cc" />
									</div>
									<div className="input-block_button">
									<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16675 10.5363H15.8334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 4.70288L15.8333 10.5362L10 16.3695" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
									</div>
								</div>

								<div class="button-block">
								<button class="button">Створити сайт</button>
								</div>

                            </div>
                        </div>
                        <div
                            id='tabs-with-underline-2'
                            class='hidden'
                            role='tabpanel'
                            ariaLabelledby='tabs-with-underline-item-2'
                        >
                            <p class='text-gray-500 dark:text-gray-400'>
                                This is the{" "}
                                <em class='font-semibold text-gray-800 dark:text-gray-200'>
                                    second
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

export default Sites;
