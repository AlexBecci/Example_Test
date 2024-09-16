// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { FaCalendarAlt, FaMoneyBillWave, FaChartBar, FaFileAlt, FaChevronDown, FaChevronRight, FaUserCircle } from 'react-icons/fa';

interface NavItemProps {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ title, icon, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="relative">
            <div
                className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center">
                    {icon}
                    <span className="ml-2">{title}</span>
                </div>
                <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <ul className={`ml-4 transition-max-height duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {children}
            </ul>
        </li>
    );
};

export const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <nav>
                <ul className="space-y-2">
                    <NavItem title="Agenda" icon={<FaCalendarAlt />}>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Gestión de citas
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Pólizas
                            </a>
                        </li>
                    </NavItem>
                    <NavItem title="Contabilidad" icon={<FaMoneyBillWave />}>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Tratamientos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Gastos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Facturas
                            </a>
                        </li>
                    </NavItem>
                    <NavItem title="Informes" icon={<FaChartBar />}>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Presupuestos
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Informe médico
                            </a>
                        </li>
                    </NavItem>
                    <NavItem title="Documentación" icon={<FaFileAlt />}>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Firmas pendientes
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                <FaChevronRight className="mr-2 text-xs" />
                                Documentos
                            </a>
                        </li>
                    </NavItem>
                </ul>
            </nav>
        </aside>
    );
};

