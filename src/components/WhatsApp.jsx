export default function WhatsApp() {
  return (
    <div>
      <a
        href="https://wa.me/94704239249"
        title="WhatsApp"
        className="fixed lg:w-14 lg:h-14 w-10 h-10 lg:bottom-10 bottom-5 lg:right-10 right-5 bg-[#25d366] hover:bg-green-600 transition-colors duration-300 text-white rounded-full text-center lg:text-4xl text-2xl z-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon flex justify-center items-center h-full"></i>
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}
