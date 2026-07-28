import { FaCheckCircle } from "react-icons/fa";

export default function CapabilityCard({
    capability
}) {
    const Icon = capability.icon;
    return (
        <div className="capability-card">
            <div className="capability-header">
                <div className="capability-icon">
                    <Icon />
                </div>
                <h3>
                    {capability.title}
                </h3>
            </div>
            <ul>
                {
                    capability.items.map(item => (
                        <li key={item}>
                            <FaCheckCircle />
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}