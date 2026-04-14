import styles from './privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>Polityka Prywatności</h1>
        <p className={styles.lastUpdated}>Ostatnia aktualizacja: 14 kwietnia 2026 r.</p>
        
        <p className={styles.intro}>
          Moja strona internetowa została zaprojektowana z myślą o Twojej prywatności. Poniżej znajdziesz informacje o tym, jakie dane są przetwarzane podczas przeglądania mojej witryny.
        </p>

        <h2 className={styles.sectionTitle}>1. Administrator Danych</h2>
        <p>
          Właścicielem strony oraz administratorem danych jest Artur Charyło.
        </p>

        <h2 className={styles.sectionTitle}>2. Jakie dane są zbierane?</h2>
        <p>
          Strona ma charakter informacyjny. Nie posiadam formularzy kontaktowych ani systemów rejestracji użytkowników. Podczas wizyty zbierane są jedynie standardowe dane techniczne przesyłane przez Twoją przeglądarkę do serwera (tzw. logi serwera), takie jak:
        </p>
        <ul className={styles.list}>
          <li>Adres IP urządzenia.</li>
          <li>Typ i wersja przeglądarki.</li>
          <li>Data i godzina wejścia na stronę.</li>
        </ul>

        <h2 className={styles.sectionTitle}>3. Pliki Cookies</h2>
        <p>
          Strona nie wykorzystuje własnych plików cookies do śledzenia użytkowników ani do celów marketingowych. Nie korzystam z zewnętrznych narzędzi analitycznych, które wymagałyby Twojej zgody na cookies.
        </p>

        <h2 className={styles.sectionTitle}>4. Cel przetwarzania</h2>
        <p>
          Dane techniczne (logi) są przetwarzane wyłącznie w celach statystycznych oraz w celu zapewnienia prawidłowego i bezpiecznego działania strony.
        </p>

        <h2 className={styles.sectionTitle}>5. Kontakt</h2>
        <p>
          Jeśli masz jakiekolwiek pytania dotyczące prywatności, możesz skontaktować się ze mną poprzez dane podane w sekcji „About” lub bezpośrednio na mój adres e-mail.
        </p>
      </section>
    </main>
  );
}