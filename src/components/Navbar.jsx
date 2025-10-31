import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XCircleIcon,
  FolderOpenIcon,
  HomeIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/img/logo.jpg";
import perfil from "../assets/img/perfil.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navigation = [
  { name: "Principal", href: "/", icon: HomeIcon },
  { name: "Proyectos", href: "/proyectos", icon: FolderOpenIcon },
  { name: "Curriculum", href: "/curriculum", icon: DocumentTextIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation();

  // 🚀 Bloquea el scroll cuando cambia el estado del menú
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // ✅ Esta función bloquea/desbloquea el scroll
  const lockScroll = (lock) => {
    document.body.style.overflow = lock ? "hidden" : "auto";
  };

  return (
    <Disclosure as="nav" className="relative bg-[#000000]">
      {({ open }) => {
        // Bloquear scroll al abrir menú móvil
        lockScroll(open);
        return (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6 group-data-open:hidden"
                    />
                    <XCircleIcon
                      aria-hidden="true"
                      className="hidden size-6 group-data-open:block"
                    />
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center gap-2">
                    <img
                      alt="Logo de Yonner"
                      src={logo}
                      className="size-10 rounded-full -outline-offset-1  transition-transform duration-300 hover:scale-110 hidden sm:block gap-2"
                    />
                    <p className="text-gray-300  font-bold">Arca Software</p>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => {
                        const isActive =
                          location.pathname === item.href ||
                          (item.href !== "/" &&
                            location.pathname.startsWith(item.href));

                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              isActive
                                ? "bg-blue-600 text-white"
                                : "text-white hover:text-gray-400",
                              "flex items-center rounded-md px-3 py-2 text-sm font-medium  transition-colors"
                            )}
                          >
                            {item.icon && (
                              <item.icon
                                className={classNames(
                                  "h-5 w-5 mr-1 transition-colors",
                                  isActive
                                    ? "text-white"
                                    : "text-white group-hover:text-gray-900"
                                )}
                                aria-hidden="true"
                              />
                            )}
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Notifications */}
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-white hover:text-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Menu</span>
                      <img
                        alt="Foto de perfil"
                        src={perfil}
                        className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0"
                    >
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          Perfil
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          Configuracion
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
            </div>

            {/* Menú mobile */}
            <DisclosurePanel className="sm:hidden fixed inset-0 z-50 flex">
              {/* Barra lateral a la izquierda */}
              <div className="bg-[#0a0a0a] w-60 h-full pt-4 shadow-lg flex flex-col">
                <div className="flex justify-left items-center  mb-6 mt-2 pb-6 px-4 gap-2 border-b border-gray-300">
                  <img
                    alt="Logo de Yonner"
                    src={logo}
                    className="size-10 rounded-full transition-transform duration-300 hover:scale-110"
                  />
                  <p className="items-center font-medium text-gray-300 ">
                    {" "}
                    Arca software brand{" "}
                  </p>
                </div>

                {navigation.map((item) => {
                  const isActive =
                    location.pathname === item.href ||
                    (item.href !== "/" &&
                      location.pathname.startsWith(item.href));

                  return (
                    <DisclosureButton
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={classNames(
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-200 hover:bg-gray-200 hover:text-gray-900",
                        "flex items-center  px-3 py-2 text-base font-medium transition-colors"
                      )}
                    >
                      {item.icon && (
                        <item.icon
                          className={classNames(
                            "h-5 w-5 mr-2 transition-colors",
                            isActive ? "text-white" : "text-gray-200"
                          )}
                          aria-hidden="true"
                        />
                      )}
                      {item.name}
                    </DisclosureButton>
                  );
                })}
              </div>

              {/* Fondo oscuro: clic fuera cierra el panel */}
              <DisclosureButton className="flex-1 bg-black/30" />
            </DisclosurePanel>
          </>
        );
      }}
    </Disclosure>
  );
}
