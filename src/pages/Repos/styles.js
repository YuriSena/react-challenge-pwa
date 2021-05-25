import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
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
        color: white;

        #repos-container {
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            width: 100%;
            height: 100vh;

            .repo-card {
                display: flex;
                flex-direction: column;
                width: 100%;
                position: relative;
                margin-bottom: 1em;

                &:before {
                    display: block;
                    content: '';
                    position: absolute;
                    background: #FFCE00;
                    top: .5em;
                    width: 10px;
                    height: 42px;
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                }

                h3 {
                    margin: 1em 0 0 1em;
                }

                #description {
                    width: 80%;
                    margin: 1em 0 0 1.1em;
                }

                #star-container {
                    display: flex;
                    align-items: center;
                    margin: 1em 0 1em 1.1em;
                    span {
                        margin-left: .5em;
                    }
                }

                #lock-container {
                    display: flex;
                    position: absolute;
                    right: 1em;
                    bottom: 1em;
                }
            }
        }

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