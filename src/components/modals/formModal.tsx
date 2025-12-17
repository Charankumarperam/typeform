import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'
import Modal from 'react-modal';
import AddformElements from '../addformElements/addformElements';
interface Props {
    isOpen: boolean;
    onClose: ()=>void;
}

function FormModal(props: Props) {
    const {isOpen,onClose} = props
    const [selectItem,setSelectItem] = useState({
        addformelements: true,
        importques: false,
        createwithAI:false,
    });
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
            overlay:{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'rgba(0,0,0,0.5)'
            },
            content:{
                position:'static',
                background:'transparent',
                border:'none'
            }
        }}
        >
            <div
            className={`bg-slate-300 h-[600px] w-[1000px] mx-auto rounded-xl`}
            >
                <div
                className={`flex justify-between items-center pl-5 w-[95%] mx-auto`}
                >
                    <div
                    className={`flex justify-between items-center gap-10`}
                    >
                        <p
                        className={`${selectItem.addformelements ? 'border-t-2' : 'border-0'} pt-3 cursor-pointer`}
                        onClick={()=>setSelectItem(prev=>({...prev,addformelements:true,importques:false,createwithAI:false}))}
                        >Add Form Elements</p>
                        <p
                        className={`${selectItem.importques ? 'border-t-2' : 'border-0'} pt-3 cursor-pointer`}
                        onClick={()=>setSelectItem(prev=>({...prev,importques:true,addformelements:false,createwithAI:false}))}
                        >Import questions</p>
                        <p
                        className={`${selectItem.createwithAI ? 'border-t-2' : 'border-0'} pt-3 cursor-pointer`}
                        onClick={()=>setSelectItem(prev=>({...prev,createwithAI:true,importques:false,addformelements:false}))}
                        >Create with AI</p>
                    </div>
                    <div>
                        <p
                        className='pt-3'
                        onClick={()=>onClose()}
                        > <FontAwesomeIcon icon={faCircleXmark} size='xl'/> </p>
                    </div>
                </div>
                {
                    selectItem.addformelements && (
                        <AddformElements/>
                    )
                }
            </div>
        </Modal>
    )
}

export default FormModal
