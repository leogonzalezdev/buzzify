const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a 
            href="https://leogonzalezdev.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            leogonzalezdev.com
          </a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
