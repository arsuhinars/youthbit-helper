import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
import views from "../views";

export const VIEW_STATE = {
    FINISHED: 'finished',
    UNFINISHED: 'unfinished',
    UNSEEN: 'unseen'
}

export default function ViewNavBar(props) {
    const viewStateBg = {
        [VIEW_STATE.FINISHED]: 'bg-primary',
        [VIEW_STATE.UNFINISHED]: 'bg-dangerous',
        [VIEW_STATE.UNSEEN]: 'bg-gray-200'
    }

    const beforeUrl = 
        props.currentView == 0 ?
        '#' :
        '/view/' + (props.currentView - 1)
    const afterUrl =
        props.currentView == views.length - 1 ?
        '#' :
        '/view/' + (Number.parseInt(props.currentView) + 1)

    return (
        <div class="w-full flex place-content-center gap-4">
            <Link to={beforeUrl}>
                <button 
                    className={
                        (props.currentView > 0 ? 'bg-primary' : 'bg-gray-200') +
                        ' rounded-full p-2'
                    }
                >
                    <ChevronLeft size={16} className="me-1" />
                </button>
            </Link>

            <div className='h-fill flex items-center gap-2'>
                {props.viewsStates.map((el, index) => (
                    <Link to={'/view/' + index}><div
                        className={
                            viewStateBg[el] +
                            (
                                index == props.currentView ?
                                ' outline outline-2 outline-primary' :
                                ''
                            ) + ' w-3 h-3 rounded-full'
                        }
                    /></Link>
                ))}
            </div>
            
            <Link to={afterUrl}>
                <button 
                    className={
                        (props.currentView < views.length - 1 ? 'bg-primary' : 'bg-gray-200') +
                        ' rounded-full p-2'
                    }
                >
                    <ChevronRight size={16} className="ms-1" />
                </button>
            </Link>
        </div>
    );
}
