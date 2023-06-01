using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileProva
{
    public class Lotto
    {
        int Nriga;
        String lotto;
        String Nseriale;
        float qtafor;

        public Lotto(int nriga, string lotto, string nseriale, float qtafor)
        {
            if (string.IsNullOrEmpty(lotto))
            {
                throw new ArgumentException($"'{nameof(lotto)}' non può essere Null o vuoto", nameof(lotto));
            }
            if (string.IsNullOrEmpty(nseriale))
            {
                throw new ArgumentException($"'{nameof(nseriale)}' non può essere Null o vuoto", nameof(nseriale));
            }
            this.Nriga = nriga;
            this.lotto = lotto;
            this.Nseriale = nseriale;
            this.qtafor = qtafor;
        }
        public Lotto()
        {
            this.Nriga = 0;
            this.lotto = "";
            this.Nseriale = "";
            this.qtafor = 0;
        }

        public String ToString()
        {
            return Nriga + " | " + lotto + " | " + Nseriale + " | " + qtafor + "\n";
        }

    }
}
