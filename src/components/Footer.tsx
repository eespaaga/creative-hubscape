const Footer = () => {
  return (
    <footer className="bg-secondary/20 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Yoddha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
