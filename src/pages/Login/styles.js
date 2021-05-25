import styled from 'styled-components';


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #292929;

    #login-container {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;

        div {
            display: flex;
            margin: 2em 0 1em 0;
            width: 100%;
            position: relative;

            input {
                width: 100%;
                background: white;
                height: 56px;
                border: 1px solid;
                border-radius: 12px;
                font-size: 20px;
                padding-left: 1em;
                padding-right: 50%;
                box-sizing: border-box;
            }

            p {
                position: absolute;
                color: red;
                right: 1em;
                top: .2em;
            }
        }
        

        #button-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFCE00;
            width: 100%;
            height: 56px;
            border-radius: 12px;

            span {
                font-size: 20px;
                font-weight: 700;
                margin-right: .5em;
            }


        }
    }
`