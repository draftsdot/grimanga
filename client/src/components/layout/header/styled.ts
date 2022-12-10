import styled from 'styled-components';



export const Grid = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    padding-right: 10px;
    border-radius: 60px;
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(15px);
    z-index: 998;

    ::before {
        position: fixer;
        content: '';
    }

    .header {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 20px;
        border-radius: 60px;
        margin-bottom: 20px;

        .brand {
            display: flex;
            align-items: center;

            .eclipse {
                position: relative;
                width: 50px;
                height: 50px;

                .circle {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: transparent;
                    box-shadow: 0px 0px 30px #fff;

                    img {
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,  -48%);
                        transition: all .3s;
                        cursor: pointer;

                        &:hover {
                            width: 30px;
                            height: 30px;
                        }
                    }
                }
            }
            .eclipse::before {
                position: absolute;
                content: '';
                width: 65px;
                height: 65px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, .1);
                backdrop-filter: blur(5px);
                border-radius: 50%;
            }

            .name {
                position: absolute;
                font-size: var(--fz-strong);
                font-family: var(--ff-grim);
                text-transform: uppercase;
                left: 70px;
            }
        }

        .navbar {
            display: flex;

            .circle {
                position: relative;
                width: 40px;
                height: 40px;
                display flex;
                border: 1px solid ${ props => props.theme.colors.icon_color };
                border-radius: 50%;
                margin-left: 20px;
                border-radius: 50%;
                cursor: pointer;
                transition: all .3s;

                .link {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -46%);
                    color: ${ props => props.theme.colors.icon_color };
                }

                &:hover {
                    background: none;
                    border: 1px solid #fff;
                    box-shadow: 0px 0px 25px #fff;

                    &:hover .link {
                        color: ${ props => props.theme.colors.text_color_def };
                    }
                }
            }
        }
    }

    .sidebar {
        display: none;
    }
`;
