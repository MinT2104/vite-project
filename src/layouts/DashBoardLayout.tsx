import { Navigation } from "../components/Navigation/Navigation"

export const DashBoardLayout = ({children}: {children: any}) => {
    return (
        <div className='h-screen bg-blue-50 flex'>
            <Navigation/>
            <div className="flex flex-col w-full">
                {/* <div className="h-16 w-full bg-white "></div> */}
                {children}
            </div>
        </div>
    )
}