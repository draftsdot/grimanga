import styled from 'styled-components';



export const Grid = styled.div`
    li { list-style: none; }

    position: relative;
    margin-bottom: 100px;
    margin-top: 100px;
    display: flex;

    .l-side {
        max-width: calc(100% - 30%);
        margin-right: 25px;
        width: 100%;

        .navbar {
            width: 100%;
            border-bottom: 2px solid #fff;
            margin-bottom: 100px;

            h1 {
                text-transform: uppercase;
                font-family: var(--ff-grim);
            }
        }

        .content {
            position: relative;
            width: 100%;
            margin: 10px;

            .row {
                position: relative;
                height: 130px;

                .card {
                    width: 100%;
                    height: 100%;
                    margin-top: 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    background: rgba(255, 255, 255, .1);
                    backdrop-filter: blur(15px);

                    .l {
                        height: 100%;
                        width: 120px;
                        border-radius: 12px;
                        background: rgba(255, 255, 255, .1);
                        backdrop-filter: blur(15px);

                        img {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .r {
                        position: absolute;
                        top: 0;
                        right: 0;
                        padding: 10px;
                        max-width: calc(100% - 130px);
                        height: 100%;
                        width: 100%;

                        .title {
                            text-transform: uppercase;
                            font-size: var(--fz-strong);
                            font-family: var(--ff-grim);
                        }
                    }
                }
            }
        }
    }

    .r-side {
        max-width: calc(100% - 70%);
        margin-left: 25px;
        width: 100%;

        .navbar {
            width: 100%;
            border-bottom: 2px solid #fff;
            margin-bottom: 100px;

            h1 {
                text-align: right;
                text-transform: uppercase;
                font-family: var(--ff-grim);
            }
    }
`;
