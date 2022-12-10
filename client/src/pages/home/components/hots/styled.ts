import styled from 'styled-components';



export const Grid = styled.div`
    position: relative;
    max-width: 1070px;
    width: 100%;

    li {
        list-style: none;
    }

    .container {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;

        .cards {
            scroll-behavior: smooth;
            overflow-x: auto;
            max-width: 1070px;
            display: flex;
            height: 200px;
            width: 100%;
            ::-webkit-scrollbar {
                display: none;
            }
            

            .navigate {
                display: flex;
                position: absolute;
                justify-content: space-between;
                max-width: 90px;
                width: 100%;
                top: -40px;
                right: 0;

                span {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    line-height: 30px;
                    background: rgba(255, 255, 255, .1);
                    backdrop-filter: blur(15px);
                    border: 1px solid ${ props => props.theme.colors.icon_color };
                    border-radius: 50%;
                    cursor: pointer;

                    .icon {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -42%);
                        color: ${ props => props.theme.colors.icon_color };
                    }

                    .prev {
                        margin-left: 10px;
                    }

                    &:hover {
                        border: 1px solid #fff;
                        box-shadow: 0px 0px 15px #fff;
                    }
                    &:hover .icon {
                        color: #fff;
                    }
                }
            }


            .card {
                background: rgba(255, 255, 255, .1);
                backdrop-filter: blur(15px);
                border-radius: 12px;
                position: relative;
                height: 180px;
                margin: auto 10px;
                width: 250px;
                flex: none;

                .l {
                    width: 125px;
                    height: 100%;
                    background: rgba(255, 255, 255, .1);
                    backdrop-filter: blur(15px);
                    border-radius: 12px;
                }
            }
        }
    }
`;
