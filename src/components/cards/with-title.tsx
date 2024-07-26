import { FC } from "react";

interface IWithTitleProps {
    title: string
}

export function withTitle<P extends {}>(
    Component: React.ComponentType<P>
): React.ComponentType<P & IWithTitleProps> {
    const ComponentWithTitle: FC<P & IWithTitleProps> = ({ title, ...props }) => {
        return (
            <div className="relative w-full h-full">
                <Component {...(props as unknown as P)} />
                <div className="absolute bottom-0 left-0 my-4 ml-4 mr-20">
                    <p className="px-4 py-2 bg-white/80 backdrop-blur-lg border border-slate-200 rounded-lg">{title}</p>
                </div>
            </div>
        )
    }

    return ComponentWithTitle
}