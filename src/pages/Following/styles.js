import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #292929 !important;

    #content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100vh - 80px);
        /* overflow-y: scroll; */

        #header {
            display: grid;
            grid-template-columns: 10px 1fr 3fr 1fr 10px;
            grid-template-rows: 68px;
            width: 100%;
            height: 68px;
            background: #1F1F1F;
            align-items: center;
            text-align: center;
            margin-bottom: 1em;
            

            #arrow-left {
                grid-column: 2;
                /* margin-left: 1em; */
            }

            span {
                grid-column: 3;
                /* margin-left: 30%; */
                color: white;
            }
        }

        #following-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            color: white;
            overflow-y: scroll;
            padding-bottom: 80px;

            .following-card {
                display: grid;
                grid-template-columns: 20px 70px 1fr 15px 20px;
                grid-template-rows: 1fr 15px;
                grid-column-gap: 15px;
                width: 100%;
                height: 100px;
                position: relative;
                justify-content: space-evenly;
                align-items: center;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);

                &:before {
                    display: block;
                    content: '';
                    position: absolute;
                    background: #FFCE00;
                    top: 1em;
                    width: 10px;
                    height: 42px;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                }

                img {
                    grid-column: 2;
                    width: 64px;
                    height: 64px;
                    border: 3px solid white;
                    border-radius: 50%;
                    background: red;
                    top: 1em;
                }

                #arrow-right {
                    grid-column: 4;
                }
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