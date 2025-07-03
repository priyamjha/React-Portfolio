export default function Copyright(){
    const currentYear = new Date().getFullYear();
    return(
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Your Website {currentYear}</small></div>
        </div>
    );
}