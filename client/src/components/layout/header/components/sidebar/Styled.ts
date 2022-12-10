import styled from 'styled-components';



export const Grid = styled.div`
    position: fixed;
    //display: none;
    width: 50px;
    right: 20px;
    border: 1px solid #fff;
    border-radius: 50px;
    box-shadow: 0px 0px 15px #fff;
    //overflow-y: scroll; // remember to esolve this problem !
    transition: all .3s;

    .sidebar {
        position: relative;
        li {
            padding: 3.5px;
            list-style: none;
        }

        .box {
            position: relative;
            width: 40px;
            height: 40px;
            border: 1px solid ${ props => props.theme.colors.icon_color };
            border-radius: 50%;

            i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -42%);
                color: ${ props => props.theme.colors.icon_color };
            }

            .name {
                position: absolute;
                display: none;
                width: 130px;
                right: 60px;
                top: 50%;
                transform: translateY(-50%);
                padding: 8px 10px;
                background: rgba(255, 255, 255, .1);
                backdrop-filter: blur(15px);
                border-radius: 30px;
                text-align: center;
                color: ${ props => props.theme.colors.text_color_alt };
                cursor: pointer;
            }

            &:hover {
                border: 1px solid #fff;
                box-shadow: 0px 0px 15px #fff;
            }
            &:hover i {
                color: ${ props => props.theme.colors.text_color_def }
            }
            &:hover .name {
                display: block;
                box-shadow: 0px 0px 15px #fff;
                color: ${ props => props.theme.colors.text_color_def };
            }
        }
    }

    .user {
        position: relative;
        margin-top: 100px;
        li {
            padding: 5px;
            list-style: none;
        }

        .box {
            position: relative;
            width: 40px;
            height: 40px;
            border: 1px solid ${ props => props.theme.colors.icon_color };
            border-radius: 50%;

            i {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -42%);
                color: ${ props => props.theme.colors.icon_color };
            }
            .name {
                position: absolute;
                display: none;
                width: 130px;
                right: 60px;
                top: 50%;
                transform: translateY(-50%);
                padding: 8px 10px;
                background: rgba(255, 255, 255, .1);
                backdrop-filter: blur(15px);
                border-radius: 30px;
                text-align: center;
                color: ${ props => props.theme.colors.text_color_alt };
                cursor: pointer;
            }
            &:hover {
                border: 1px solid #fff;
                box-shadow: 0px 0px 15px #fff;
            }
            &:hover i {
                color: ${ props => props.theme.colors.text_color_def }
            }
            &:hover .name {
                display: block;
                box-shadow: 0px 0px 15px #fff;
                color: ${ props => props.theme.colors.text_color_def };
            }

            .tumblr {
                position: relative;
                width: 35px;
                height: 35px;

                .avatar {

                    img {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -42%);
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
`;
