import { useLoaderData } from 'react-router-dom';
import ViewNavBar, { VIEW_STATE } from '../components/ViewNavBar';
import views from '../views';

export function loader({ params }) {
    const viewNumber = params.viewNumber;
    const view = views[params.viewNumber];

    return { viewNumber, view };
}

export default function ViewPage() {
    const { viewNumber, view } = useLoaderData();

    const viewsStates = [];
    for (let i = 0; i < views.length; i++) {
        // pages_types.push(i == viewNumber ? PAGE_TYPE.UNFINISHED : PAGE_TYPE.UNSEEN);
        viewsStates.push(VIEW_STATE.UNSEEN);
    }

    return (
        <div class="text-center">
            { view }
            <ViewNavBar viewsStates={viewsStates} currentView={viewNumber} />
        </div>
    );
}
