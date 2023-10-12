import React from 'react'
import "./FAQ.css"
export default function () {
    return (
        <>
            <>
                <h2>Frequently Asked Questions</h2>
                <div
                    style={{ visibility: "hidden", position: "absolute", width: 0, height: 0 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <symbol viewBox="0 0 24 24" id="expand-more">
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </symbol>
                        <symbol viewBox="0 0 24 24" id="close">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </symbol>
                    </svg>
                </div>
                <details open="">
                    <summary>
                    What are some essential items to pack for an outdoor adventure?
                        <svg
                            className="control-icon control-icon-expand"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#expand-more"
                            />
                        </svg>
                        <svg
                            className="control-icon control-icon-close"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
                        </svg>
                    </summary>
                    <br />
                    <p>- Depending on your activity, essentials might include clothing appropriate for the weather, food, water, navigation tools (maps, GPS), first aid kit, and appropriate gear (e.g., tent for camping, hiking boots).</p>
                </details>
                <details>
                    <summary>
                    How do I choose the right location for my outdoor adventure?


                        <svg
                            className="control-icon control-icon-expand"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#expand-more"
                            />
                        </svg>
                        <svg
                            className="control-icon control-icon-close"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
                        </svg>
                    </summary>
                    <br />
                    <p>- Consider your interests and the type of adventure you want (hiking, camping, fishing, etc.). Research different locations, taking into account factors like distance, difficulty, weather, and regulations.
                    .</p>
                </details>
                <details>
                    <summary>
                    What safety precautions should I take before heading out?
                        <svg
                            className="control-icon control-icon-expand"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#expand-more"
                            />
                        </svg>
                        <svg
                            className="control-icon control-icon-close"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
                        </svg>
                    </summary>
                    <br />
                    <p> - Always let someone know your plans, including your expected return time. Check the weather forecast, bring necessary safety gear (e.g., helmets for biking, life jackets for water activities), and learn basic outdoor first aid. .</p>
                </details>
                <details>
                    <summary>
                    How can I plan meals for a camping trip?
                        <svg
                            className="control-icon control-icon-expand"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#expand-more"
                            />
                        </svg>
                        <svg
                            className="control-icon control-icon-close"
                            width={24}
                            height={24}
                            role="presentation"
                        >
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" />
                        </svg>
                    </summary>
                    <br />
                    <p>- Plan meals that are easy to prepare and pack. Freeze-dried and dehydrated foods are convenient options. Make a meal plan, ensuring you have enough food for your trip's duration. </p>
                </details>
            </>


        </>
    )
}
