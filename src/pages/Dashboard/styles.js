import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #292929;

    #content {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        align-items: center;
        background: #292929;
        color: white;
        overflow-y: scroll;

        #header-container {
            display: flex;
            background: #1F1F1F;
            width: 100%;
            height: 15%;
            padding: 1em;
            justify-content: space-between;
            color: white;
            font-size: 18px;

            #logout-container {
                display: flex;
                justify-content: center;

                span {
                    font-size: 18px;
                    font-weight: lighter;
                    padding-right: 0.5em;
                }
            }
        }

        img {
            position: absolute;
            width: 115px;
            height: 115px;
            border: 3px solid white;
            border-radius: 50%;
            background: red;
            top: 4em;
        }

        #user-contact-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 30%;
            position: relative;

            &:before {
                display: block;
                content: '';
                position: absolute;
                background: #FFCE00;
                top: -.4em;
                width: 10px;
                height: 42px;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
            }

            h2 {
                margin: 0 0 .5em;
                padding-left: 1em;
            }

            span {
                margin-bottom: .3em;
                padding-left: 1.5em;
            }
        }

        #numbers-container {
            display: flex;
            width: 100%;
            height: 97px;
            justify-content: center;
            background-color: #5252525D;
            margin-top: 2em;

            .numbers-info {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .number {
                    font-size: 40px;
                    font-weight: 600;
                }

                .text {
                    font-size: 20px;
                }
            }
        }

        #bio-container {
            display: flex;
            flex-direction: column;
            position: relative;
            margin-top: 2em;

            h2 {
                margin: .3em 0 0 1em;
            }

            p {
                padding: 0 0 0 1.5em;
            }

            &:before {
                display: block;
                content: '';
                position: absolute;
                background: #FFCE00;
                top: 0;
                width: 10px;
                height: 42px;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
            }
        }
    }

    #footer-menu {
        display: flex;
        width: 100%;
        height: 80px;
        background-color: white;
        position: absolute;
        bottom: 0;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        justify-content: center;
        align-items: center;

        #actual {
            span {
                color: black;
            }
            .icon {
                color: black;
            }
            
        }

        .footer-item {
            display: flex;
            flex: 1;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            align-items: center;

            &:visited {
                
                span {
                    color: black;
                }

                .icon {
                    color: black;
                }
            }

            .icon {
                color: #A5A5A5;
            }
            
            span {
                margin-top: 0.2em;
                font-weight: 600;
                color: #A5A5A5;
            }
        }
    }

`