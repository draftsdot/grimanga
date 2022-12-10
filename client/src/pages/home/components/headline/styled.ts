import styled from 'styled-components';



export const Grid = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 50px;
    justify-content: center;

    .container {
        max-width: 500px;
        width: 70%;
        display: flex;
        justify-content: center;

        .maxwidth {
            position: relative;
            max-width: 600px;
            width: 100%;
            height: 300px;
            background: rgba(255, 255, 255, .1);
            backdrop-filter: blur(15px);
            border-radius: 15px;

            .tumblr {
                background: orange;
                text-align: center;

                span {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    padding: 10px 12px;
                    background: rgba(255, 255, 255, .1);
                    backdrop-filter: blur(15px);
                    border-top-left-radius: 12px;
                    border-bottom-right-radius: 12px;
                    font-size: var(--fz-normal);
                    font-family: var(--ff-grim);
                    text-transform: uppercase;
                }

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
`;
