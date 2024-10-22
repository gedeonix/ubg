# Zasoby Uwspółcześnionej Biblii Gdańskiej
Dane uzyskane bezpośrednio z Fundacja Wrota Nadziei.

Version: 2024-06-04
Aktualnie wersja z naniesionymi korektami  - Errata do UBG 20240604.docx

## Licencja
> Dajemy zgodę na korzystanie z tego pliku bezpłatnie pod warunkiem, że nie będą
> wprowadzone żadnych zmian do tekstu i że będzie udostępniony zupełnie za darmo.
> 
> Pozdrawiam,
> Józef West
> Wrota Nadziei

Szczegóły licencji na końcu pliku: pubg.ont

## Pliki ont
Pliki ont jest zgodny ze specyfikacją programu https://www.theword.net
Więcej o formacie danych można znaleźć pod adresem: https://www.theword.net/docs/tw3-bible-module-spec.doc

W katalogu dist znajdują się:
 * pubg-red.ont - główny plik źródłowy na podstawie którego generujemy inne formaty
 * pubg.ont - plik bez oznaczeń na czerwoni słów naszeg Pana Jezusa 
 * index.ont i lines.ont- indeksy rozdziałów i wersetów

Ważne jest to, że dla plików ont (Old & New Testament) mamy 31102 linie wersetów (wg numeracji KJV)

## Pozostałe dostępne formaty
 * logos - plik docx dla desktopowego oprogramowania Logos
 * opensong 
 * usx - pliku USX3 dla oprogramowania Paratext

## Dokumentacja i info zmian (także wprowadzane erraty)

    https://docs.google.com/document/d/179Uk1jZGFy-4xGVB-55p7NFQFcFxLX0UOgyhjNErvLI/edit?usp=sharing

## Do sprawdzenia

[1]
jest => 1Chr 17:9 Ustanowię miejsce dla swego ludu Izraelem i zasadzę go <i>tam</i>, i będzie mieszkał na swoim miejscu, i nie poruszy się więcej ani już nie będą go gnębić synowie nieprawości jak dawniej;
było => 1Chr 17:9 Ustanowię miejsce dla swego ludu Izraela i zasadzę go <i>tam</i>, i będzie mieszkał na swoim miejscu, i nie poruszy się więcej ani już nie będą go gnębić synowie nieprawości jak dawniej;

[2]
jest => 2Chr 6:4 I powiedział: Błogosławiony <i>niech będzie</i> PAN, Bóg Izraelem, który swoimi rękami wypełnił to, co mówił swoimi ustami do mojego ojca Dawida:
było => 2Chr 6:4 I powiedział: Błogosławiony <i>niech będzie</i> PAN, Bóg Izraela, który swoimi rękami wypełnił to, co mówił swoimi ustami do mojego ojca Dawida:


## Generacja innych formatów przy użyciu BibleMultiConverter 

    java -jar BibleMultiConverter-AllInOneEdition.jar TheWord pubg-text.ont OSIS pubg-osis.xml