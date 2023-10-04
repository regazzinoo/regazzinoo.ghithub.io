import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.SocketException;

public class App{
  public static void main(String[] args) throws IOException {
        
    Azienda azienda=new Azienda();
    azienda.caricaFile("dipendente.txt");
    azienda.visualizza();
    Ufficio uff2=new Ufficio("produzione", 1, "A09", "Rega Andrea", 8);
    Dipendente d3=new Dipendente("Luca", "Bertiato", "Via Cialdini, Monza", "21/08/2004", "21/08/2020", 0);
    azienda.salvaSuFile("dipendente.txt");
    azienda.visualizza();
    
    }
}