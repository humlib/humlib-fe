import React, { useEffect } from 'react'
import styled from 'styled-components'
import { HorizontalContainer, VerticalContainer } from '../layout/Container'
import { useDispatch } from '../redux/store'
import { visited } from '../redux/userSlice'
import { Button } from './Button'

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(81, 158, 188, 0.3);
`

const Dialog = styled.div`
    background-color: white;
    margin: 0 20px;
    border-radius: 10px;
    padding: 10px;
    /* http://css3studio.com/page-css3/css-box-shadow.php */
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
`

export const FirstVisitModal = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const hasValue = localStorage.getItem('firstVisit')
        if (hasValue) dispatch(visited())
    }, [])

    return (
        <Modal>
            <VerticalContainer stretch>
                <Dialog>
                    <h2>Das erste Mal da?</h2>
                    <p>
                        Dann schau&apos; Dir doch zuerst unser Video-Tutorial
                        an!
                    </p>
                    <HorizontalContainer>
                        <Button
                            onClick={() => {
                                console.log('clicked Video anschauen')
                            }}
                        >
                            Video anschauen
                        </Button>
                        <Button
                            primary
                            onClick={() => {
                                dispatch(visited())
                                localStorage.setItem('firstVisit', 'true')
                            }}
                        >
                            Direkt zu HumLib
                        </Button>
                    </HorizontalContainer>
                </Dialog>
            </VerticalContainer>
        </Modal>
    )
}
