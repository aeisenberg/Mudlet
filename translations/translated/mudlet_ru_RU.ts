<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru" sourcelanguage="en">
  <context>
    <name>Discord</name>
    <message>
      <location filename="../src/discord.cpp" line="149"/>
      <source>via Mudlet</source>
      <translation>через Mudlet</translation>
    </message>
  </context>
  <context>
    <name>Feed</name>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="275"/>
      <source>Too many redirects.</source>
      <translation>Слишком много перенаправлений.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="284"/>
      <source>No data received from server</source>
      <translation>Данные не получены с сервера</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/feed.cpp" line="295"/>
      <source>Could not verify download integrity.</source>
      <translation>Не удалось проверить целостность загруженных данных.</translation>
    </message>
  </context>
  <context>
    <name>GLWidget</name>
    <message>
      <location filename="../src/glwidget.cpp" line="288"/>
      <source>No rooms in the map - load another one, or start mapping from scratch to begin.</source>
      <translation>У вас еще нет карты - загрузите ее или начните создавать карту с нуля.</translation>
    </message>
    <message>
      <location filename="../src/glwidget.cpp" line="293"/>
      <source>You do not have a map yet - load one, or start mapping from scratch to begin.</source>
      <translation>У вас еще нет карты - загрузите ее или начните создавать карту с нуля.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/glwidget.cpp" line="290"/>
      <source>You have a map loaded (%n room(s)), but Mudlet does not know where you are at the moment.</source>
      <translation>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>Host</name>
    <message>
      <location filename="../src/Host.cpp" line="464"/>
      <source>Text to send to the game</source>
      <translation>Текст для отправки в игру</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="858"/>
      <source>[  OK  ]  - %1 Thanks a lot for using the Public Test Build!</source>
      <comment>%1 will be a random happy emoji</comment>
      <translation>[  OK  ]  - %1 Большое спасибо за использование Public Test Build!</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="859"/>
      <source>[  OK  ]  - %1 Help us make Mudlet better by reporting any problems.</source>
      <comment>%1 will be a random happy emoji</comment>
      <translation>[  OK  ]  - %1 Помогите нам сделать Mudlet лучше, сообщая о любых проблемах.</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1659"/>
      <source>Unpacking module:
&quot;%1&quot;
please wait...</source>
      <translation>Распаковка модуля:
&quot;%1&quot;
пожалуйста, подождите...</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1661"/>
      <source>Unpacking package:
&quot;%1&quot;
please wait...</source>
      <translation>Распаковка пакета:
&quot;%1&quot;
пожалуйста, подождите...</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="1665"/>
      <source>Unpacking</source>
      <translation>Распаковка</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2314"/>
      <source>Playing %1</source>
      <translation>Играет в %1</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2316"/>
      <location filename="../src/Host.cpp" line="2322"/>
      <source>%1 at %2:%3</source>
      <comment>%1 is the game name and %2:%3 is game server address like: mudlet.org:23</comment>
      <translation>%1 на %2:%3</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="2704"/>
      <location filename="../src/Host.cpp" line="3636"/>
      <source>Map - %1</source>
      <translation>Карта - %1</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="3652"/>
      <source>Pre-Map loading(3) report</source>
      <translation>Предварительная загрузка карты(3) отчет</translation>
    </message>
    <message>
      <location filename="../src/Host.cpp" line="3662"/>
      <source>Loading map(3) at %1 report</source>
      <translation>Загрузка карты(3) в %1 отчет</translation>
    </message>
  </context>
  <context>
    <name>KeyUnit</name>
    <message>
      <location filename="../src/KeyUnit.cpp" line="333"/>
      <source>%1undefined key (code: 0x%2)</source>
      <comment>%1 is a string describing the modifier keys (e.g. &quot;shift&quot; or &quot;control&quot;) used with the key, whose &apos;code&apos; number, in %2 is not one that we have a name for. This is probably one of those extra keys around the edge of the keyboard that some people have.</comment>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>MapInfoContributorManager</name>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="116"/>
      <source>Area:%1%2 ID:%1%3 x:%1%4%1&lt;‑&gt;%1%5 y:%1%6%1&lt;‑&gt;%1%7 z:%1%8%1&lt;‑&gt;%1%9
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and non-breaking hyphens which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. %2 is the (text) name of the area, %3 is the number for it, %4 to %9 are pairs (min &lt;-&gt; max) of extremes for each of x,y and z coordinates</comment>
      <translation>Область:%1%2 ID:%1%3 x:%1%4%1&lt;b‑&gt;%1%5 y:%1%6%1&lt;b‑&gt;%1%7 z:%1%8%1&lt;b‑&gt;%1%9
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="140"/>
      <source>Room Name: %1
</source>
      <translation>Комната: %1
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="153"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1current player location
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when NO rooms are selected, %3 is the room number of, and %4-%6 are the x,y and z coordinates for, the current player&apos;s room.</comment>
      <translation>Комната%1Идентификатор:%1%2 Позиция%1на%1Карте: (%3,%4,%5) ‑%1текущая позиция игрока
</translation>
    </message>
    <message>
      <location filename="../src/mapInfoContributorManager.cpp" line="170"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1selected room
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when ONE room is selected, %3 is the room number of, and %4-%6 are the x,y and z coordinates for, the selected Room.</comment>
      <translation>Комната%1Идентификатор:%1%2 Позиция%1на%1Карте: (%3,%4,%5) ‑%1выбранная комната
</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mapInfoContributorManager.cpp" line="188"/>
      <source>Room%1ID:%1%2 Position%1on%1Map: (%3,%4,%5) ‑%1center of %n selected rooms
</source>
      <comment>This text uses non-breaking spaces (as &apos;%1&apos;s, as Qt Creator cannot handlethem literally in raw strings) and a non-breaking hyphen which are used to prevent the line being split at some places it might otherwise be; when translating please consider at which points the text may be divided to fit onto more than one line. This text is for when TWO or MORE rooms are selected; %1 is the room number for which %2-%4 are the x,y and z coordinates of the room nearest the middle of the selection. This room has the yellow cross-hairs. %n is the count of rooms selected and will ALWAYS be greater than 1 in this situation. It is provided so that non-English translations can select required plural forms as needed.</comment>
      <translation>
        <numerusform>Комната%1 ID:%1%2 Позиция%1на%1Карте: (%3,%4,%5) ‑%1центр %n выбранных комнат
</numerusform>
        <numerusform>Комната%1 ID:%1%2 Позиция%1на%1Карте: (%3,%4,%5) ‑%1центр %n выбранных комнат
</numerusform>
        <numerusform>Комната%1 ID:%1%2 Позиция%1на%1Карте: (%3,%4,%5) ‑%1центр %n выбранных комнат
</numerusform>
        <numerusform>Комната%1 ID:%1%2 Позиция%1на%1Карте: (%3,%4,%5) ‑%1центр %n выбранных комнат
</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="142"/>
      <source>! %1</source>
      <translation>! %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="144"/>
      <source>! %1 is away (%2)</source>
      <translation>! %1 отошел (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="146"/>
      <source>! %1 is back</source>
      <translation>! %1 вернулся</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="153"/>
      <source>! invited %1 to %2</source>
      <translation>! пригласил %1 к %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="156"/>
      <source>! %2 invited to %3</source>
      <translation>! %2 приглашён в %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="163"/>
      <source>! You have joined %1 as %2</source>
      <translation>! Вы присоединились к %1 как %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="165"/>
      <source>! %1 has joined %2</source>
      <translation>! %1 присоединился %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="172"/>
      <source>! %1 kicked %2</source>
      <translation>! %1 пнул %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="180"/>
      <source>! %1 mode is %2 %3</source>
      <translation>! режим %1 - %2 %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="182"/>
      <source>! %1 sets mode %2 %3 %4</source>
      <translation>! %1 устанавливает режим %2 %3 %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="199"/>
      <source>[MOTD] %1%2</source>
      <translation>[MOTD] %1%2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="211"/>
      <source>! %1 has %2 users: %3</source>
      <translation>! %1 имеет %2 пользователей: %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="213"/>
      <source>! %1 has %2 users</source>
      <translation>! %1 имеет %2 пользователей</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="220"/>
      <source>! %1 has changed nick to %2</source>
      <translation>! %1изменил псевдоним на %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="234"/>
      <source>! %1 replied in %2</source>
      <translation>! %1 ответил через %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="237"/>
      <location filename="../src/ircmessageformatter.cpp" line="286"/>
      <source>! %1 time is %2</source>
      <translation>! %1 время %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="240"/>
      <location filename="../src/ircmessageformatter.cpp" line="283"/>
      <source>! %1 version is %2</source>
      <translation>! %1 версия %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="256"/>
      <source>[%1%2] %3</source>
      <translation>[%1%2] %3</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="264"/>
      <source>&amp;lt;%1%2&amp;gt; [%3] %4</source>
      <translation>&amp;lt;%1%2&amp;gt; [%3] %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="278"/>
      <source>[INFO] %1</source>
      <translation>[ИНФО] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="305"/>
      <location filename="../src/ircmessageformatter.cpp" line="331"/>
      <source>[ERROR] %1</source>
      <translation>[ОШИБКА] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="315"/>
      <source>[Channel URL] %1</source>
      <translation>[URL канала] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="324"/>
      <source>[%1] %2</source>
      <translation>[%1] %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="338"/>
      <source>! %1 has left %2</source>
      <translation>! %1 покинул %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="340"/>
      <source>! %1 has left %2 (%3)</source>
      <translation>! %1 покинул %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="349"/>
      <source>! %1 replied in %2 seconds</source>
      <translation>! %1 ответил через %2 секунд</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="363"/>
      <source>* %1 %2</source>
      <translation>* %1 %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="369"/>
      <source>&lt;b&gt;&amp;lt;%1&amp;gt;&lt;/b&gt; %2</source>
      <translation>&lt;b&gt;&amp;lt;%1&amp;gt;&lt;/b&gt; %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="378"/>
      <source>! %1 has quit</source>
      <translation>! %1 ушел</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="380"/>
      <source>! %1 has quit (%2)</source>
      <translation>! %1 ушел (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="388"/>
      <source>! no topic</source>
      <translation>! нет тем</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="397"/>
      <source>[TOPIC] %1</source>
      <translation>[TEMA] %1</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="401"/>
      <source>! %2 cleared topic</source>
      <translation>! %2 убрал тему</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="404"/>
      <source>! %2 changed topic</source>
      <translation>! %2 изменил тему</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="410"/>
      <source>? %2 %3 %4</source>
      <translation>? %2 %3 %4</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="417"/>
      <source>[WHOIS] %1 is %2@%3 (%4)</source>
      <translation>[WHOIS] %1 является %2@%3 (%4)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="418"/>
      <source>[WHOIS] %1 is connected via %2 (%3)</source>
      <translation>[WHOIS] %1 подключен через %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="419"/>
      <source>[WHOIS] %1 is connected since %2 (idle %3)</source>
      <translation>[WHOIS] %1 подключен с %2 (бездействия %3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="421"/>
      <source>[WHOIS] %1 is away: %2</source>
      <translation>[WHOIS] %1 отошел: %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="424"/>
      <source>[WHOIS] %1 is logged in as %2</source>
      <translation>[WHOIS] %1 вошёл как %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="427"/>
      <source>[WHOIS] %1 is connected from %2</source>
      <translation>[WHOIS] %1 подключен с %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="430"/>
      <source>[WHOIS] %1 is using a secure connection</source>
      <translation>[WHOIS] %1 использует защищенное соединение</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="433"/>
      <source>[WHOIS] %1 is on %2</source>
      <translation>[WHOIS] %1 на %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="442"/>
      <source>[WHOWAS] %1 was %2@%3 (%4)</source>
      <translation>[WHOWAS] %1 был %2@%3 (%4)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="443"/>
      <source>[WHOWAS] %1 was connected via %2 (%3)</source>
      <translation>[WHOWAS] %1 был подключен через %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="445"/>
      <source>[WHOWAS] %1 was logged in as %2</source>
      <translation>[WHOWAS] %1 был зарегистрирован в как %2</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="453"/>
      <source>[WHO] %1 (%2)</source>
      <translation>[WHO] %1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="455"/>
      <source> - away</source>
      <translation> - отошел</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="458"/>
      <source> - server operator</source>
      <translation> - оператор серверa</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="466"/>
      <source>%1s</source>
      <translation>%1сек</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="473"/>
      <source>%1 days</source>
      <translation>%1 дней</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="477"/>
      <source>%1 hours</source>
      <translation>%1 часов</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="481"/>
      <source>%1 mins</source>
      <translation>%1 мин</translation>
    </message>
    <message>
      <location filename="../src/ircmessageformatter.cpp" line="483"/>
      <source>%1 secs</source>
      <translation>%1 секунд</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="55"/>
      <source>Start element not found!</source>
      <translation>Начальный элемент не найден!</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="67"/>
      <source>line %1: %2</source>
      <translation>линия %1: %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/baseplistparser.cpp" line="149"/>
      <source>Expected %1 while parsing</source>
      <translation>Ожидается %1 при разборе</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/jsonparser.cpp" line="145"/>
      <source>%1 @ line %2</source>
      <translation>%1 @ линия %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="82"/>
      <source>No data found!</source>
      <translation>Нет данных!</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="89"/>
      <source>Expected object in keymap
</source>
      <translation>Ожидается объект в 'keymap'
</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/io/keymapparser.cpp" line="129"/>
      <source>Invalid keysequence used %1
</source>
      <translation>Недопустимое сочитание клавиш %1
</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/models/texteditorkeymap.cpp" line="371"/>
      <source>Error parsing %1: %2 </source>
      <translation>Ошибка при анализе %1: %2 </translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/models/textgrammar.cpp" line="306"/>
      <source>Error reading file %1:%2</source>
      <translation>Ошибка при чтении файла %1:%2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="435"/>
      <source>%1 ranges</source>
      <translation>%1 диапазон</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="441"/>
      <source>Line %1, Column %2</source>
      <translation>Строка %1, столбец %2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="444"/>
      <source>, Offset %1</source>
      <translation>, смещение %1</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="448"/>
      <source> | %1 chars selected</source>
      <translation> | %1 символов выбранного</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="452"/>
      <source> | scope: </source>
      <translation> | область действия: </translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/texteditorcontroller.cpp" line="462"/>
      <source> (%1)</source>
      <translation> (%1)</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/texttheme.cpp" line="399"/>
      <source>Error parsing theme %1:%2</source>
      <translation>Ошибка при анализе темы %1:%2</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/texttheme.cpp" line="404"/>
      <source>Error theme not found %1.</source>
      <translation>Ошибка, тема не найденa %1.</translation>
    </message>
  </context>
  <context>
    <name>T2DMap</name>
    <message>
      <location filename="../src/T2DMap.cpp" line="2808"/>
      <source>Create a new room here</source>
      <translation>Создать новую комнату</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2981"/>
      <source>Change the properties of this custom line</source>
      <translation>Изменить свойства этой линии</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3210"/>
      <location filename="../src/T2DMap.cpp" line="4823"/>
      <source>Solid line</source>
      <translation>Сплошная линия</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3211"/>
      <location filename="../src/T2DMap.cpp" line="4824"/>
      <source>Dot line</source>
      <translation>Точечная линия</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3212"/>
      <location filename="../src/T2DMap.cpp" line="4825"/>
      <source>Dash line</source>
      <translation>Линия тире</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3213"/>
      <location filename="../src/T2DMap.cpp" line="4826"/>
      <source>Dash-dot line</source>
      <translation>Тире-точка линия</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3214"/>
      <location filename="../src/T2DMap.cpp" line="4827"/>
      <source>Dash-dot-dot line</source>
      <translation>Тире-точка-точка линия</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3502"/>
      <source>x coordinate (was %1):</source>
      <translation>x-координат (был %1):</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3503"/>
      <source>y coordinate (was %1):</source>
      <translation>y-координат (был %1):</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3504"/>
      <source>z coordinate (was %1):</source>
      <translation>z-координат (был %1):</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3692"/>
      <source>Delete color</source>
      <comment>Deletes an environment colour</comment>
      <translation>Удалить звет</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3710"/>
      <source>Define new color</source>
      <translation>Определить новый цвет</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4024"/>
      <source>%1 {count:%2}</source>
      <translation>%1 {всего: %2}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="1386"/>
      <location filename="../src/T2DMap.cpp" line="1507"/>
      <location filename="../src/T2DMap.cpp" line="2322"/>
      <location filename="../src/T2DMap.cpp" line="2338"/>
      <source>no text</source>
      <comment>Default text if a label is created in mapper with no text</comment>
      <translation>без текста</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="141"/>
      <source>ID</source>
      <comment>Room ID in the mapper widget</comment>
      <translation>ID</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="141"/>
      <source>Name</source>
      <comment>Room name in the mapper widget</comment>
      <translation>Имя</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="143"/>
      <source>&lt;p&gt;Click on a line to select or deselect that room number (with the given name if the rooms are named) to add or remove the room from the selection.  Click on the relevant header to sort by that method.  Note that the name column will only show if at least one of the rooms has a name.&lt;/p&gt;</source>
      <translation>&lt;/p&gt;Нажмите на строку, чтобы выбрать или отменить выбор номера комнаты (или названия комнаты, если оно было задано), чтобы добавить или удалить комнату из выбора. Для сортировки нажмите на соответствующий заголовок. Обратите внимание, что имя столбца будет отображаться только, если хотя бы одна из комнат имеет  название.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="601"/>
      <source>Mapper: Cannot find a path from %1 to %2 using known exits.</source>
      <translation>Mapper: Не удается найти путь от %1 до %2, используя известные выхода.</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="1259"/>
      <source>You do not have a map yet - load one, or start mapping from scratch to begin.</source>
      <translation>У вас еще нет карты - загрузите ее или начните создавать карту с нуля.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/T2DMap.cpp" line="1256"/>
      <source>You have a map loaded (%n room(s)), but Mudlet does not know where you are at the moment.</source>
      <translation>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
        <numerusform>У вас загружена карта (%n комнат), но Mudlet не знает, где вы находитесь в данный момент.</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="1254"/>
      <source>No rooms in the map - load another one, or start mapping from scratch to begin.</source>
      <translation>У вас еще нет карты - загрузите ее или начните создавать карту с нуля.</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2256"/>
      <source>render time: %1S mO: (%2,%3,%4)</source>
      <comment>This is debug information that is not expected to be seen in release versions, %1 is a decimal time period and %2-%4 are the x,y and z coordinates at the center of the view (but y will be negative compared to previous room related ones as it represents the real coordinate system for this widget which has y increasing in a downward direction!)</comment>
      <translation>время обработки: %1S mO: (%2,%3,%4)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2328"/>
      <source>Text label or image label?</source>
      <comment>2D Mapper create label dialog text</comment>
      <translation>Метка текста или метка изображения?</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2329"/>
      <source>Text Label</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Метка с текстом</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2330"/>
      <source>Image Label</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Метка с изображением</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2334"/>
      <source>Enter label text.</source>
      <comment>2D Mapper create label dialog title/text</comment>
      <translation>Введите текст метки.</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2341"/>
      <source>Background color</source>
      <comment>2D Mapper create label color dialog title</comment>
      <translation>Цвет фона</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2342"/>
      <source>Foreground color</source>
      <comment>2D Mapper create label color dialog title</comment>
      <translation>Цвет переднего плана</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2346"/>
      <source>Select image</source>
      <comment>2D Mapper create label file dialog title</comment>
      <translation>Выбрать изображение</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2353"/>
      <source>Draw label as background or on top of everything?</source>
      <comment>2D Mapper create label dialog text</comment>
      <translation>Отобразить метку в качестве фона или поверх всего?</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2354"/>
      <source>Background</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Задний план</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2355"/>
      <source>Foreground</source>
      <comment>2D Mapper create label dialog button</comment>
      <translation>Передний план</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2604"/>
      <source>Drag to select multiple rooms or labels, release to finish...</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>Зажмите кнопку мыши, чтобы выбрать несколько комнат или меток; отпустите кнопку мыши, чтобы закончить...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2708"/>
      <source>Undo</source>
      <comment>2D Mapper context menu (drawing custom exit line) item</comment>
      <translation>Отменить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2709"/>
      <source>Undo last point</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>Отменить последний пункт</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2716"/>
      <source>Properties</source>
      <comment>2D Mapper context menu (drawing custom exit line) item name (but not used as display text as that is set separately)</comment>
      <translation>Свойства</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2718"/>
      <source>properties...</source>
      <comment>2D Mapper context menu (drawing custom exit line) item display text (has to be entered separately as the ... would get stripped off otherwise)</comment>
      <translation>свойства...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2719"/>
      <source>Change the properties of this line</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>Изменить свойства этой линии</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2722"/>
      <source>Finish</source>
      <comment>2D Mapper context menu (drawing custom exit line) item</comment>
      <translation>Завершить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2723"/>
      <source>Finish drawing this line</source>
      <comment>2D Mapper context menu (drawing custom exit line) item tooltip</comment>
      <translation>Закончить рисование</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2790"/>
      <source>Create new map</source>
      <comment>2D Mapper context menu (no map found) item</comment>
      <translation>Создать новую карту</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2793"/>
      <source>Load map</source>
      <comment>2D Mapper context menu (no map found) item</comment>
      <translation>Загрузить карту</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2807"/>
      <source>Create room</source>
      <comment>Menu option to create a new room in the mapper</comment>
      <translation>Создать комнату</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2814"/>
      <source>Move</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Переместить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2815"/>
      <source>Move room</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Подвинуть комнату</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2818"/>
      <source>Delete</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Удалить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2819"/>
      <source>Delete room</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Удалить комнату</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2822"/>
      <source>Color</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Цвет</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2823"/>
      <source>Change room color</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Изменить цвет</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2826"/>
      <source>Spread</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Распространить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2827"/>
      <source>Increase map X-Y spacing for the selected group of rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Увеличить X-Y интервал карты для выбранных групп комнат</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2830"/>
      <source>Shrink</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Сжать</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2831"/>
      <source>Decrease map X-Y spacing for the selected group of rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Уменьшить X-Y интервал карты для выбранных групп комнат</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2834"/>
      <source>Lock</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Заблокировать</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2835"/>
      <source>Lock room for speed walks</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Закрыть комнату для быстрого перемещения</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2838"/>
      <source>Unlock</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Разблокировать</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2839"/>
      <source>Unlock room for speed walks</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Открыть комнату для быстрого перемещения</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2842"/>
      <source>Weight</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Вес</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2843"/>
      <source>Set room weight</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Введите вес комнаты</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2846"/>
      <source>Exits</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Выходы</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2847"/>
      <source>Set room exits</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Введите выходы из комнаты</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2850"/>
      <source>Symbol</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Символ</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2851"/>
      <source>Set one or more symbols or letters to mark special rooms</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Назначить один или несколько символов или букв, чтобы отметить особые комнаты</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2854"/>
      <source>Move to</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Переместить в</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2855"/>
      <source>Move selected group to a given position</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Перенести выбранную группу в заданную позицию</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2858"/>
      <source>Area</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Область</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2859"/>
      <source>Set room&apos;s area number</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Задать ID области этих комнат</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2862"/>
      <source>Custom exit line</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Пользовательская линия выхода</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2864"/>
      <source>Replace an exit line with a custom line</source>
      <comment>2D Mapper context menu (room) item tooltip (enabled state)</comment>
      <translation>Заменить стандартный выход с линией</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2868"/>
      <source>Custom exit lines are not shown and are not editable in grid mode</source>
      <comment>2D Mapper context menu (room) item tooltip (disabled state)</comment>
      <translation>Пользовательские линии выхода не отображаются и не редактируюемы в режиме сетки</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2872"/>
      <source>Create Label</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Добавить метку</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2873"/>
      <source>Create labels to show text or images</source>
      <comment>2D Mapper context menu (room) item tooltip</comment>
      <translation>Создать метки для отображения текста или изображения</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2892"/>
      <source>Set location</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Установить местоположение</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2894"/>
      <source>Set player current location to here</source>
      <comment>2D Mapper context menu (room) item tooltip (enabled state)</comment>
      <translation>Установить текущее местоположение игрока здесь</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2898"/>
      <source>Can only set location when exactly one room is selected</source>
      <comment>2D Mapper context menu (room) item tooltip (disabled state)</comment>
      <translation>Можно задать расположение только в том случае, если выбрана ровно одна комната</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2905"/>
      <source>Switch to editing mode</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Перейти в режим редактирования</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2906"/>
      <source>Switch to viewing mode</source>
      <comment>2D Mapper context menu (room) item</comment>
      <translation>Перейти в режим просмотра</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2916"/>
      <source>Move</source>
      <comment>2D Mapper context menu (label) item</comment>
      <translation>Переместить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2917"/>
      <source>Move label</source>
      <comment>2D Mapper context menu item (label) tooltip</comment>
      <translation>Переместить метку</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2919"/>
      <source>Delete</source>
      <comment>2D Mapper context menu (label) item</comment>
      <translation>Удалить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2920"/>
      <source>Delete label</source>
      <comment>2D Mapper context menu (label) item tooltip</comment>
      <translation>Удалить метку</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2936"/>
      <source>Add point</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>Добавить точку</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2943"/>
      <source>Divide segment by adding a new point mid-way along</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state)</comment>
      <translation>Разделить сегмент путем добавления новой точки в середине</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2946"/>
      <source>Select a point first, then add a new point mid-way along the segment towards room</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state, i.e must do the suggested action first)</comment>
      <translation>Сначала выберите точку, затем добавьте новую точку посередине вдоль сегмента в направлении комнаты</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2950"/>
      <source>Remove point</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>Удалить точку</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2957"/>
      <source>Merge pair of segments by removing this point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state but will be able to be done again on this item)</comment>
      <translation>Объединить пару сегментов путем удаления этой точки</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2961"/>
      <source>Remove last segment by removing this point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (enabled state but is the last time this action can be done on this item)</comment>
      <translation>Удалить последний сегмент путем удаления этой точки</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2966"/>
      <source>use &quot;delete line&quot; to remove the only segment ending in an editable point</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state this action can not be done again on this item but something else can be the quoted action &quot;delete line&quot; should match the translation for that action)</comment>
      <translation>используйте &quot;удалить строку&quot;, чтобы удалить единственный сегмент, заканчивающийся в редактируемой точке</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2972"/>
      <source>Select a point first, then remove it</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip (disabled state, user will need to do something before it can be used)</comment>
      <translation>Сначала выберите точку, а затем удалите её</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2976"/>
      <source>Properties</source>
      <comment>2D Mapper context menu (custom line editing) item name (but not used as display text as that is set separately)</comment>
      <translation>Свойства</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2980"/>
      <source>properties...</source>
      <comment>2D Mapper context menu (custom line editing) item display text (has to be entered separately as the ... would get stripped off otherwise</comment>
      <translation>свойства...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2984"/>
      <source>Delete line</source>
      <comment>2D Mapper context menu (custom line editing) item</comment>
      <translation>Удалить линию</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="2985"/>
      <source>Delete all of this custom line</source>
      <comment>2D Mapper context menu (custom line editing) item tooltip</comment>
      <translation>Удалить всю линию</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3495"/>
      <source>Move the selection, centered on
the highlighted room (%1) to:</source>
      <comment>Use linefeeds as necessary to format text into a reasonable rectangle of text, %1 is a room number</comment>
      <translation>Переместить выделенное по центру подсвеченной комнаты (%1), чтобы:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3519"/>
      <source>OK</source>
      <comment>dialog (room(s) move) button</comment>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3524"/>
      <source>Cancel</source>
      <comment>dialog (room(s) move) button</comment>
      <translation>Отменить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3718"/>
      <source>OK</source>
      <comment>dialog (room(s) change color) button</comment>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3723"/>
      <source>Cancel</source>
      <comment>dialog (room(s) change color) button</comment>
      <translation>Отменить</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3780"/>
      <source>Spread out rooms</source>
      <translation>Разложить комнаты</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3781"/>
      <source>Increase the spacing of
the selected rooms,
centered on the
highlighted room by a
factor of:</source>
      <translation>Уменьшить интервал выбранных комнат,
центрируясь на подсвеченной комнате на коэффициент, равный:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3840"/>
      <source>Shrink in rooms</source>
      <translation>Сократить расстояния между комнатами</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3841"/>
      <source>Decrease the spacing of
the selected rooms,
centered on the
highlighted room by a
factor of:</source>
      <translation>Уменьшить интервал выбранных комнат,
центрируясь на подсвеченной комнате на коэффициент, равный:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3969"/>
      <location filename="../src/T2DMap.cpp" line="3983"/>
      <location filename="../src/T2DMap.cpp" line="4033"/>
      <source>Enter room weight</source>
      <translation>Введите вес для комнаты</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3970"/>
      <source>Enter new roomweight
(= travel time), minimum
(and default) is 1:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Введите новый вес комнаты
(= времени прохода), минимальная
(и по умолчанию) 1:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="3984"/>
      <source>Enter new roomweight
(= travel time) for all
selected rooms, minimum
(and default) is 1 and
the only current value
used is:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Введите новый вес комнат
(= времени поездки) для всех
выделенных комнат, минимальная
(и по умолчанию) 1 и
теперешний вес:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4022"/>
      <source>%1 {count:%2, default}</source>
      <translation>%1 {всего:%2, по умолчанию}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4030"/>
      <source>1 {count 0, default}</source>
      <translation>1 {count 0, default}</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4034"/>
      <source>Choose an existing
roomweight (= travel
time) from the list
(sorted by most commonly
used first) or enter a
new (positive) integer
value for all selected
rooms:</source>
      <comment>Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Выберите существующую
 стоимость прохода по клетке (=время путешествия)
 из списка (отсортированного по наиболее используемым значениям) 
или введите новое положительное число для всех выбранных комнат:</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4083"/>
      <source>Load Mudlet map</source>
      <translation>Загрузить карту Mudlet</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4085"/>
      <source>Mudlet map (*.dat);;Xml map data (*.xml);;Any file (*)</source>
      <comment>Do not change extensions (in braces) or the ;;s as they are used programmatically</comment>
      <translation>Mudlet карта (*.dat); Карта Xml-данные (*.xml); Любой файл (*)</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="4970"/>
      <location filename="../src/T2DMap.cpp" line="5004"/>
      <source>Left-click to add point, right-click to undo/change/finish...</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>Нажмите левую кнопку, чтобы добавить точку, щелкните правой кнопкой мыши для отмены/изменения/конца...</translation>
    </message>
    <message>
      <location filename="../src/T2DMap.cpp" line="5015"/>
      <source>Left-click and drag a square for the size and position of your label</source>
      <comment>2D Mapper big, bottom of screen help message</comment>
      <translation>Щелкните и перетащите квадрат для размера и положения метки</translation>
    </message>
  </context>
  <context>
    <name>TAlias</name>
    <message>
      <location filename="../src/TAlias.cpp" line="132"/>
      <location filename="../src/TAlias.cpp" line="200"/>
      <source>[Alias Error:] %1 capture group limit exceeded, capture less groups.
</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TAlias.cpp" line="269"/>
      <source>Error: in &quot;Pattern:&quot;, faulty regular expression, reason: &quot;%1&quot;.</source>
      <translation>Ошибка: в &quot;шаблон:&quot;, неверное регулярное выражение, причина: &quot;%1&quot;.</translation>
    </message>
  </context>
  <context>
    <name>TArea</name>
    <message>
      <location filename="../src/TArea.cpp" line="376"/>
      <source>roomID=%1 does not exist, can not set properties of a non-existent room!</source>
      <translation>roomID=%1 не существует, невозможно задать свойства несуществующей комнаты!</translation>
    </message>
    <message>
      <location filename="../src/TArea.cpp" line="765"/>
      <source>no text</source>
      <comment>Default text if a label is created in mapper with no text</comment>
      <translation>без текста</translation>
    </message>
  </context>
  <context>
    <name>TCommandLine</name>
    <message>
      <location filename="../src/TCommandLine.cpp" line="668"/>
      <source>Add to user dictionary</source>
      <translation>Добавить в свой словарь</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="670"/>
      <source>Remove from user dictionary</source>
      <translation>Удалить из своего словаря</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="674"/>
      <source>▼Mudlet▼ │ dictionary suggestions │ ▲User▲</source>
      <comment>This line is shown in the list of spelling suggestions on the profile&apos;s command-line context menu to clearly divide up where the suggestions for correct spellings are coming from.  The precise format might be modified as long as it is clear that the entries below this line in the menu come from the spelling dictionary that the user has chosen in the profile setting which we have bundled with Mudlet; the entries about this line are the ones that the user has personally added.</comment>
      <translation>▼Mudlet▼ │ предложения словаря │ Свой ▲▲</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="684"/>
      <source>▼System▼ │ dictionary suggestions │ ▲User▲</source>
      <comment>This line is shown in the list of spelling suggestions on the profile&apos;s command-line context menu to clearly divide up where the suggestions for correct spellings are coming from.  The precise format might be modified as long as it is clear that the entries below this line in the menu come from the spelling dictionary that the user has chosen in the profile setting which is provided as part of the OS; the entries about this line are the ones that the user has personally added.</comment>
      <translation>▼ Система ▼ │ предложения словаря │ ▲ Свой ▲</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="752"/>
      <source>no suggestions (system)</source>
      <comment>used when the command spelling checker using the selected system dictionary has no words to suggest</comment>
      <translation>нет предложений (система)</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="779"/>
      <source>no suggestions (shared)</source>
      <comment>used when the command spelling checker using the dictionary shared between profile has no words to suggest</comment>
      <translation>нет предложений (из профилей)</translation>
    </message>
    <message>
      <location filename="../src/TCommandLine.cpp" line="783"/>
      <source>no suggestions (profile)</source>
      <comment>used when the command spelling checker using the profile&apos;s own dictionary has no words to suggest</comment>
      <translation>нет предложений (профиль)</translation>
    </message>
  </context>
  <context>
    <name>TConsole</name>
    <message>
      <location filename="../src/TConsole.cpp" line="81"/>
      <source>Debug Console</source>
      <translation>Консоль отладки</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="763"/>
      <source>Save profile?</source>
      <translation>Сохранить профиль?</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="763"/>
      <source>Do you want to save the profile %1?</source>
      <translation>Вы хотите сохранить профиль %1?</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="776"/>
      <source>Couldn&apos;t save profile</source>
      <translation>Не удалось сохранить профиль</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="776"/>
      <source>Sorry, couldn&apos;t save your profile - got the following error: %1</source>
      <translation>К сожалению, невозможно сохранить профиль - есть ошибка: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="1689"/>
      <source>System Message: %1</source>
      <translation>Системное сообщение: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="324"/>
      <source>Show Time Stamps.</source>
      <translation>Показывать марки времени</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="336"/>
      <source>Record a replay.</source>
      <translation>Записать повтор.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="347"/>
      <source>Start logging game output to log file.</source>
      <translation>Начать ведение журнала в лог-файл.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="358"/>
      <source>&lt;i&gt;N:&lt;/i&gt; is the latency of the game server and network (aka ping, in seconds), &lt;br&gt;&lt;i&gt;S:&lt;/i&gt; is the system processing time - how long your triggers took to process the last line(s).</source>
      <translation>&lt;i&gt;N:&lt;/i&gt; -задержка сервера игры и сети (aka ping, в секундах), &lt;br&gt;&lt;i&gt;S:&lt;/i&gt; -время обработки системы-сколько времени потребовалось для обработки последней строки.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="391"/>
      <source>Emergency Stop. Stops all timers and triggers.</source>
      <translation>Аварийная остановка. Останавливает все таймеры и триггеры.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="407"/>
      <source>Search buffer.</source>
      <translation>Поиск буфера.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="415"/>
      <source>Earlier search result.</source>
      <translation>Прошлый результат поиска.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="426"/>
      <source>Later search result.</source>
      <translation>Позжий результат поиска.</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="860"/>
      <source>Replay recording has started. File: %1</source>
      <translation>Началась запись воспроизведения. Файл: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="863"/>
      <source>Replay recording has been stopped. File: %1</source>
      <translation>Запись преобразования остановлена. Файл: %1</translation>
    </message>
    <message>
      <location filename="../src/TConsole.cpp" line="1842"/>
      <location filename="../src/TConsole.cpp" line="1881"/>
      <source>No search results, sorry!</source>
      <translation>Нет результатов поиска, к сожалению!</translation>
    </message>
  </context>
  <context>
    <name>TEasyButtonBar</name>
    <message>
      <location filename="../src/TEasyButtonBar.cpp" line="70"/>
      <source>Easybutton Bar - %1 - %2</source>
      <translation>Easybutton Bar - %1 - %2</translation>
    </message>
  </context>
  <context>
    <name>TLuaInterpreter</name>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="10005"/>
      <source>Playing %1</source>
      <translation>Играет в %1</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12412"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12433"/>
      <source>ERROR</source>
      <translation>ОШИБКА</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12413"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12424"/>
      <source>object</source>
      <comment>object is the Mudlet alias/trigger/script, used in this sample message: object:&lt;Alias1&gt; function:&lt;cure_me&gt;</comment>
      <translation>объект</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="12413"/>
      <location filename="../src/TLuaInterpreter.cpp" line="12424"/>
      <source>function</source>
      <comment>function is the Lua function, used in this sample message: object:&lt;Alias1&gt; function:&lt;cure_me&gt;</comment>
      <translation>функция</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13903"/>
      <source>Some functions may not be available.</source>
      <translation>Некоторые функции могут быть недоступны.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13321"/>
      <source>No error message available from Lua</source>
      <translation>Нет сообщения об ошибке от Lua</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13323"/>
      <source>Lua error: %1</source>
      <translation>Ошибка Lua: %1</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13325"/>
      <source>[ ERROR ] - Cannot find Lua module %1.%2%3%4</source>
      <comment>%1 is the name of the module;%2 will be a line-feed inserted to put the next argument on a new line;%3 is the error message from the lua sub-system;%4 can be an additional message about the expected effect (but may be blank).</comment>
      <translation>[ ОШИБКА ] - Не удается найти модуль Lua %1.%2%3%4</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13339"/>
      <source>[  OK  ]  - Lua module %1 loaded.</source>
      <comment>%1 is the name (may specify which variant) of the module.</comment>
      <translation>[  OK  ] - модуль Lua %1 загружен.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13890"/>
      <source>Probably will not be able to access Mudlet Lua code.</source>
      <translation>Вероятно, не сможет получить доступ к коду Mudlet Lua.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13908"/>
      <source>Database support will not be available.</source>
      <translation>Поддержка базы данных будет недоступна.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13915"/>
      <source>utf8.* Lua functions won&apos;t be available.</source>
      <translation>utf8.* Lua функции не будут доступны.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13921"/>
      <source>yajl.* Lua functions won&apos;t be available.</source>
      <translation>yajl.* Lua функции не будут доступны.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14106"/>
      <source>No error message available from Lua.</source>
      <translation>Нет сообщения об ошибке от Lua.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14108"/>
      <source>Lua error: %1.</source>
      <translation>Ошибка Lua: %1.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14110"/>
      <source>[ ERROR ] - Cannot load code formatter, indenting functionality won&apos;t be available.
</source>
      <translation>[ ОШИБКА ] - Не удается загрузить программу форматирования кода, функция индентирования недоступна.
</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14187"/>
      <source>%1 (doesn&apos;t exist)</source>
      <comment>This file doesn&apos;t exist</comment>
      <translation>%1 (не существует)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14192"/>
      <source>%1 (isn&apos;t a file or symlink to a file)</source>
      <translation>%1 (это не файл или симлинк на файл)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14201"/>
      <source>%1 (isn&apos;t a readable file or symlink to a readable file)</source>
      <translation>%1 (это не читаемый файл или симлинк на читаемый файл)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14219"/>
      <source>%1 (couldn&apos;t read file)</source>
      <comment>This file could not be read for some reason (for example, no permission)</comment>
      <translation>%1 (не удалось прочитать файл)</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14225"/>
      <source>[  OK  ]  - Mudlet-lua API &amp; Geyser Layout manager loaded.</source>
      <translation>[  OK  ] - Загружен Mudlet-lua API и Geyser Layout менеджер.</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14232"/>
      <source>[ ERROR ] - Couldn&apos;t find, load and successfully run LuaGlobal.lua - your Mudlet is broken!
Tried these locations:
%1</source>
      <translation>[ ОШИБКА ] - Не удалось загрузить LuaGlobal; ваш Мудлет сломан!
Попробовали эти места:
%1</translation>
    </message>
  </context>
  <context>
    <name>TMainConsole</name>
    <message>
      <location filename="../src/TMainConsole.cpp" line="165"/>
      <source>logfile</source>
      <comment>Must be a valid default filename for a log-file and is used if the user does not enter any other value (Ensure all instances have the same translation {2 of 2}).</comment>
      <translation>журнал</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="206"/>
      <source>Logging has started. Log file is %1
</source>
      <translation>Начато ведения журнала. Файл журнала %1
</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="216"/>
      <source>Logging has been stopped. Log file is %1
</source>
      <translation>Закончен ввод журнала. Файл журнала %1
</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="246"/>
      <source>Mudlet MUD Client version: %1%2</source>
      <translation>Mudlet MUD client версия: %1%2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="248"/>
      <source>Mudlet, log from %1 profile</source>
      <translation>Mudlet, журнал из профиля %1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="284"/>
      <location filename="../src/TMainConsole.cpp" line="306"/>
      <source>&apos;Log session starting at &apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</source>
      <comment>This is the format argument to QDateTime::toString(...) and needs to follow the rules for that function {literal text must be single quoted} as well as being suitable for the translation locale</comment>
      <translation>&apos;Протоколирование начинается с &apos;чч: мм: сс&apos; на &apos;дддддд&apos;, &apos;d&apos; &apos;ММММ&apos; &apos;гггг&apos;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="311"/>
      <source>&lt;p&gt;Stop logging game output to log file.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Остановить ведение журнала в лог-файл.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="315"/>
      <source>&apos;Log session ending at &apos;hh:mm:ss&apos; on &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</source>
      <comment>This is the format argument to QDateTime::toString(...) and needs to follow the rules for that function {literal text must be single quoted} as well as being suitable for the translation locale</comment>
      <translation>&apos;Сеанс журнала, заканчивающийся на &amp;aposhh:mm:ss&apos; на &apos;dddd&apos;, &apos;d&apos; &apos;MMMM&apos; &apos;yyyy&apos;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="328"/>
      <source>&lt;p&gt;Start logging game output to log file.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Начать ведение журнала в лог-файл.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="642"/>
      <source>Pre-Map loading(2) report</source>
      <translation>Предварительная загрузка карты(2) отчет</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="653"/>
      <source>Loading map(2) at %1 report</source>
      <translation>Загрузка карты(2) в %1 отчет</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1053"/>
      <source>User window - %1 - %2</source>
      <translation>Пользовательское окно - %1 - %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1101"/>
      <source>N:%1 S:%2</source>
      <comment>The first argument &apos;N&apos; represents the &apos;N&apos;etwork latency; the second &apos;S&apos; the &apos;S&apos;ystem (processing) time</comment>
      <translation>N:%1 S:%2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1108"/>
      <source>&lt;no GA&gt; S:%1</source>
      <comment>The argument &apos;S&apos; represents the &apos;S&apos;ystem (processing) time, in this situation the Game Server is not sending &quot;GoAhead&quot; signals so we cannot deduce the network latency...</comment>
      <translation>&lt;no GA&gt; S:%1</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1205"/>
      <source>Pre-Map loading(1) report</source>
      <translation>Предварительная загрузка карты(1) отчет</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1223"/>
      <source>Loading map(1) at %1 report</source>
      <translation>Загрузка карты(1) в %1 отчет</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1225"/>
      <source>Loading map(1) &quot;%1&quot; at %2 report</source>
      <translation>Загрузка карты(1) &quot;%1&quot; в %2 отчет</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1269"/>
      <source>Pre-Map importing(1) report</source>
      <translation>Предварительный отчет об импорте карты (1)</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1292"/>
      <source>[ ERROR ]  - Map file not found, path and name used was:
%1.</source>
      <translation>[ Ошибка ] - Файл карты не найден, путь и имя было:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1298"/>
      <source>loadMap: bad argument #1 value (filename used: 
&quot;%1&quot; was not found).</source>
      <translation>loadMap: неверное значение аргумента #1 (используемое имя файла: 
&quot;%1&quot; не найдено).</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1307"/>
      <source>[ INFO ]  - Map file located and opened, now parsing it...</source>
      <translation>[ ИНФО ]  - Файл карты расположен и открыт, теперь его анализ...</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1314"/>
      <source>Importing map(1) &quot;%1&quot; at %2 report</source>
      <translation>Импорт карты (1) &quot;%1&quot; в отчете %2</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1317"/>
      <source>[ INFO ]  - Map file located but it could not opened, please check permissions on:&quot;%1&quot;.</source>
      <translation>[ ИНФОРМАЦИЯ]-Файл карты обнаружен, но не удалось открыть, проверьте разрешения на:&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1320"/>
      <source>loadMap: bad argument #1 value (filename used: 
&quot;%1&quot; could not be opened for reading).</source>
      <translation>loadMap: неверный аргумент #1 (используемое имя файла: 
&quot;%1&quot; невозможно открыть для чтения).</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1344"/>
      <source>[ INFO ]  - Map reload request received from system...</source>
      <translation>[ ИНФО ] - Запрос на перезагрузку карты получен от системы...</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1349"/>
      <source>[  OK  ]  - ... System Map reload request completed.</source>
      <translation>[ OK ] -... Запрос на перезагрузку системной карты завершен.</translation>
    </message>
    <message>
      <location filename="../src/TMainConsole.cpp" line="1351"/>
      <source>[ WARN ]  - ... System Map reload request failed.</source>
      <translation>[ ВНИМ ] - ... Сбой запроса на перезагрузку системной карты.</translation>
    </message>
  </context>
  <context>
    <name>TMap</name>
    <message>
      <location filename="../src/TMap.cpp" line="210"/>
      <source>RoomID=%1 does not exist, can not set AreaID=%2 for non-existing room!</source>
      <translation>RoomID=%1 не существует, не возможно установить AreaID=%2 в несуществующую комнату!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="221"/>
      <source>AreaID=%2 does not exist, can not set RoomID=%1 to non-existing area!</source>
      <translation>AreaID=%2 не существует, не возможно установить RoomID=%1 в несуществующую область!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="469"/>
      <source>[ INFO ] - CONVERTING: old style label, areaID:%1 labelID:%2.</source>
      <translation>[ ИНФО ] - ПРЕОБРАЗОВАНИЕ: метка старого стиля, areaID:%1 labelID:%2.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="472"/>
      <source>[ INFO ] - Converting old style label id: %1.</source>
      <translation>[ ИНФО ] - Преобразование метки старого стиля: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="477"/>
      <source>[ WARN ] - CONVERTING: cannot convert old style label in area with id: %1,  label id is: %2.</source>
      <translation>[ ВНИМ ] - ПРЕОБРАЗОВАНИЕ: невозможно преобразовать метку старого стиля в области с id: %1, ИД метки: %2.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="480"/>
      <source>[ WARN ] - CONVERTING: cannot convert old style label with id: %1.</source>
      <translation>[ ВНИМ ] - ПРЕОБРАЗОВАНИЕ: невозможно преобразовать метку старого стиля id: %1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="509"/>
      <source>[  OK  ]  - Auditing of map completed (%1s). Enjoy your game...</source>
      <translation>[  OK  ] - Аудит карты завершён (%1s). Наслаждайтесь игрой...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="516"/>
      <source>[  OK  ]  - Map loaded successfully (%1s).</source>
      <translation>[  ОК  ] - карта загружена успешно (%1s).</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="987"/>
      <source>n</source>
      <comment>This translation converts the direction that DIR_NORTH codes for to a direction string that the game server will accept!</comment>
      <translation>n</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="988"/>
      <source>ne</source>
      <comment>This translation converts the direction that DIR_NORTHEAST codes for to a direction string that the game server will accept!</comment>
      <translation>ne</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="989"/>
      <source>e</source>
      <comment>This translation converts the direction that DIR_EAST codes for to a direction string that the game server will accept!</comment>
      <translation>e</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="990"/>
      <source>se</source>
      <comment>This translation converts the direction that DIR_SOUTHEAST codes for to a direction string that the game server will accept!</comment>
      <translation>se</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="991"/>
      <source>s</source>
      <comment>This translation converts the direction that DIR_SOUTH codes for to a direction string that the game server will accept!</comment>
      <translation>s</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="992"/>
      <source>sw</source>
      <comment>This translation converts the direction that DIR_SOUTHWEST codes for to a direction string that the game server will accept!</comment>
      <translation>sw</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="993"/>
      <source>w</source>
      <comment>This translation converts the direction that DIR_WEST codes for to a direction string that the game server will accept!</comment>
      <translation>w</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="994"/>
      <source>nw</source>
      <comment>This translation converts the direction that DIR_NORTHWEST codes for to a direction string that the game server will accept!</comment>
      <translation>nw</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="995"/>
      <source>up</source>
      <comment>This translation converts the direction that DIR_UP codes for to a direction string that the game server will accept!</comment>
      <translation>up</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="996"/>
      <source>down</source>
      <comment>This translation converts the direction that DIR_DOWN codes for to a direction string that the game server will accept!</comment>
      <translation>down</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="997"/>
      <source>in</source>
      <comment>This translation converts the direction that DIR_IN codes for to a direction string that the game server will accept!</comment>
      <translation>in</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="998"/>
      <source>out</source>
      <comment>This translation converts the direction that DIR_OUT codes for to a direction string that the game server will accept!</comment>
      <translation>out</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="187"/>
      <source>[MAP ERROR:]%1
</source>
      <translation>[ОШИБКА КАРТЫ:]%1
</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="48"/>
      <source>Default Area</source>
      <translation>Область по умолчанию</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="49"/>
      <source>Unnamed Area</source>
      <translation>Безымянная Область</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="439"/>
      <source>[ INFO ]  - Map audit starting...</source>
      <translation>[ INFO ] - Начало проверки карты...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1445"/>
      <source>[ INFO ]  - You might wish to donate THIS map file to the Mudlet Museum!
There is so much data that it DOES NOT have that you could be
better off starting again...</source>
      <translation>[ ИНФО ]  - вы, возможно, желаете подарить этот файл карты в музей Mudlet!
Существует так много данных, которых музей не имеет, может быть
лучше начать снова...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1504"/>
      <source>[ ALERT ] - Failed to load a Mudlet JSON Map file, reason:
%1; the file is:
&quot;%2&quot;.</source>
      <translation>[ ALERT]-Не удалось загрузить файл карты JSON Mudlet, причина:
%1; файл:
&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1509"/>
      <source>[ INFO ]  - Ignoring this map file.</source>
      <translation>[ ИНФО ] - Игнорируя этот файл с картой.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1674"/>
      <source>[ INFO ]  - Default (reset) area (for rooms that have not been assigned to an
area) not found, adding reserved -1 id.</source>
      <translation>[ ИНФО ]  - Не найдена область по умолчанию (для комнат, не назначенных 
зоне), добавляется зарезервированный ID -1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1768"/>
      <source>[ INFO ]  - Successfully read the map file (%1s), checking some
consistency details...</source>
      <translation>[ ИНФО ]  - Успешно прочитан файл карты (%1s), проверяем некоторые детали согласования
...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1783"/>
      <source>No map found. Would you like to download the map or start your own?</source>
      <translation>Карта на найдена. Вы хотите загрузить карту или начать свою собственную?</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1784"/>
      <source>Download the map</source>
      <translation>Скачать карту</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1785"/>
      <source>Start my own</source>
      <translation>Начать свою собственную карту</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2231"/>
      <source>Map issues</source>
      <translation>Проблемы с картой</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2238"/>
      <source>Area issues</source>
      <translation>Проблемы с областями</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2244"/>
      <source>Area id: %1 &quot;%2&quot;</source>
      <translation>Id Зоны: %1 &quot;%2&quot;</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2246"/>
      <source>Area id: %1</source>
      <translation>Область: %1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2255"/>
      <source>Room issues</source>
      <translation>Проблемы с комнатами</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2262"/>
      <source>Room id: %1 &quot;%2&quot;</source>
      <translation>Id комнаты: %1 &quot;%2&quot;</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2264"/>
      <source>Room id: %1</source>
      <translation>Комната: %1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2274"/>
      <source>End of report</source>
      <translation>Конец отчета</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2280"/>
      <source>[ ALERT ] - At least one thing was detected during that last map operation
that it is recommended that you review the most recent report in
the file:
&quot;%1&quot;
- look for the (last) report with the title:
&quot;%2&quot;.</source>
      <translation>[ ВНИМ ] - по крайней мере, одна штука была обнаружена при последней операции с картой 
, рекомендуется пересмотреть протокол в
файле:
&quot;%1&quot;
- искать (последний) протокол с названием:
&quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2288"/>
      <source>[ INFO ]  - The equivalent to the above information about that last map
operation has been saved for review as the most recent report in
the file:
&quot;%1&quot;
- look for the (last) report with the title:
&quot;%2&quot;.</source>
      <translation>[ ИНФО ]  - Эквивалент вышеуказанной информации о последней операции карты
сохранён для просмотра в качестве последнего отчета в
файл:
&quot;%1&quot;
- ищите (последний) отчет с заголовком:
&quot;%2&quot;. 321.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2344"/>
      <source>[ ERROR ] - Unable to use or create directory to store map.
Please check that you have permissions/access to:
&quot;%1&quot;
and there is enough space. The download operation has failed.</source>
      <translation>[ ОШИБКА ] - Не удается использовать или создать папку для хранения карты.
Пожалуйста, проверьте, что у вас есть права доступа/доступ к:
&quot;%1&quot;
и достаточно места. Не удалось загрузить файл.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2370"/>
      <source>[ INFO ]  - Map download initiated, please wait...</source>
      <translation>[ Инфо ]  - Загрузка карты начата, пожалуйста, подождите...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2381"/>
      <source>Map download</source>
      <comment>This is a title of a progress window.</comment>
      <translation>Загрузка карты</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2444"/>
      <source>Map import</source>
      <comment>This is a title of a progress dialog.</comment>
      <translation>Импорт карты</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2749"/>
      <location filename="../src/TMap.cpp" line="3234"/>
      <source>Exporting JSON map data from %1
Areas: %2 of: %3   Rooms: %4 of: %5   Labels: %6 of: %7...</source>
      <translation>Экспорт данных карты JSON из %1
Области: %2 из: %3   Комнаты: %4 из: %5   Метки: %6 из: %7...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2764"/>
      <source>Map JSON export</source>
      <comment>This is a title of a progress window.</comment>
      <translation>Экспорт карты JSON</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2899"/>
      <source>Exporting JSON map file from %1 - writing data to file:
%2 ...</source>
      <translation>Экспорт файла карты JSON из %1 - запись данных в файл:
%2...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2925"/>
      <source>import or export already in progress</source>
      <translation>импорт или экспорт уже выполняется</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2933"/>
      <source>could not open file</source>
      <translation>не удалось открыть файл</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2943"/>
      <source>could not parse file, reason: &quot;%1&quot; at offset %2</source>
      <translation>не удалось разобрать файл, причина: &quot;%1&quot; по смещению %2</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2952"/>
      <source>empty Json file, no map data detected</source>
      <translation>пустой файл Json, данные карты не обнаружены</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2967"/>
      <source>invalid format version &quot;%1&quot; detected</source>
      <translation>обнаружен неверный номер версии: %1</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2973"/>
      <source>no format version detected</source>
      <translation>не обнаружена версия формата</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2979"/>
      <source>no areas detected</source>
      <translation>области не обнаружены</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="3004"/>
      <source>Map JSON import</source>
      <comment>This is a title of a progress window.</comment>
      <translation>Импорт JSON-карты</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="3100"/>
      <source>aborted by user</source>
      <translation>прервано пользователем</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2989"/>
      <location filename="../src/TMap.cpp" line="3244"/>
      <source>Importing JSON map data to %1
Areas: %2 of: %3   Rooms: %4 of: %5   Labels: %6 of: %7...</source>
      <translation>Импорт данных JSON карты для %1
Области: %2 из: %3   Комнат: %4 из: %5   Метки: %6 из: %7...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1021"/>
      <source>[ ERROR ] - The format version &quot;%1&quot; you are trying to save the map with is too new
for this version of Mudlet. Supported are only formats up to version %2.</source>
      <translation>[ ОШИБКА ] - Формат "%1", в котором вы пытаетесь сохранить карту, слишком новый
для этой версии Mudlet. Поддерживаются только форматы до версии "%2".</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1037"/>
      <source>[ ALERT ] - Saving map in format version &quot;%1&quot; that is different than &quot;%2&quot; which
it was loaded as. This may be an issue if you want to share the resulting
map with others relying on the original format.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1047"/>
      <source>[ WARN ]  - Saving map in format version &quot;%1&quot; different from the
recommended map version %2 for this version of Mudlet.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1385"/>
      <location filename="../src/TMap.cpp" line="1827"/>
      <source>[ ERROR ] - Unable to open map file for reading: &quot;%1&quot;!</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1407"/>
      <source>[ ALERT ] - File does not seem to be a Mudlet Map file. The part that indicates
its format version seems to be &quot;%1&quot; and that doesn&apos;t make sense. The file is:
&quot;%2&quot;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1422"/>
      <source>[ ALERT ] - Map file is too new. Its format version &quot;%1&quot; is higher than this version of
Mudlet can handle (%2)! The file is:
&quot;%3&quot;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1429"/>
      <source>[ INFO ]  - You will need to update your Mudlet to read the map file.</source>
      <translation>[ ИНФО ] - Вам нужно будет обновить Mudlet для чтения файла карты.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1438"/>
      <source>[ ALERT ] - Map file is really old. Its format version &quot;%1&quot; is so ancient that
this version of Mudlet may not gain enough information from
it but it will try! The file is: &quot;%2&quot;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1452"/>
      <source>[ INFO ]  - Reading map. Format version: %1. File:
&quot;%2&quot;,
please wait...</source>
      <translation>[ ИНФО ] - Чтение карты. Версия формата: %1. Файл:
&quot;%2&quot;,
пожалуйста подождите...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1455"/>
      <source>[ INFO ]  - Reading map. Format version: %1. File: &quot;%2&quot;.</source>
      <translation>[ ИНФО ] - Чтение карты. Версия формата: %1. Файл: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1843"/>
      <source>[ INFO ]  - Checking map file &quot;%1&quot;, format version &quot;%2&quot;.</source>
      <translation>[ ИНФО ] - Проверка файла карты &quot;%1&quot;, формат версии &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2380"/>
      <location filename="../src/TMap.cpp" line="2758"/>
      <location filename="../src/TMap.cpp" line="2998"/>
      <source>Abort</source>
      <translation>Прервать</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2378"/>
      <source>Downloading map file for use in %1...</source>
      <comment>%1 is the name of the current Mudlet profile</comment>
      <translation>Скачивая карта для использования в %1...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="1414"/>
      <source>[ INFO ]  - Ignoring this unlikely map file.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2412"/>
      <source>loadMap: unable to perform request, a map is already being downloaded or
imported at user request.</source>
      <translation>loadMap: невозможно выполнить запрос, карта уже загружается или
импортирована по запросу пользователя.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2443"/>
      <source>Importing XML map file for use in %1...</source>
      <translation>Импорт XML карты для использования в %1...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2471"/>
      <source>loadMap: failure to import XML map file, further information may be available
in main console!</source>
      <translation>loadMap: сбой при импорте файла карты XML, дополнительная информация доступна
в главной консоли!</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2506"/>
      <source>[ ALERT ] - Map download was canceled, on user&apos;s request.</source>
      <translation>[ ВНИМ ] - Загрузка карты отменена, по требованию пользователя&apos;.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2525"/>
      <source>[ ERROR ] - Map download encountered an error:
%1.</source>
      <translation>[ Ошибка ] - при закачки карты произошла ошибка:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2556"/>
      <source>[ ALERT ] - Map download failed, error reported was:
%1.</source>
      <translation>[ ВНИМ ] - Не удалось загрузить карту, сообщение об ошибке:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2564"/>
      <source>[ ALERT ] - Map download failed, unable to open destination file:
%1.</source>
      <translation>[ ВНИМ ] - Не удалось загрузить карту, невозможно открыть целевой файл:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2569"/>
      <source>[ ALERT ] - Map download failed, unable to write destination file:
%1.</source>
      <translation>[ ВНИМ ] - Не удалось загрузить карту, невозможно записать файл назначения:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2582"/>
      <location filename="../src/TMap.cpp" line="2599"/>
      <source>[ INFO ]  - ... map downloaded and stored, now parsing it...</source>
      <translation>[ ИНФО ]  - ... карта загружена и размещена, теперь анализируем информацию ...</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2590"/>
      <location filename="../src/TMap.cpp" line="2625"/>
      <source>[ ERROR ] - Map download problem, failure in parsing destination file:
%1.</source>
      <translation>[ ОШИБКА]-Ошибка загрузки карты, ошибка при анализе содержимого файла назначения:
%1.</translation>
    </message>
    <message>
      <location filename="../src/TMap.cpp" line="2630"/>
      <source>[ ERROR ] - Map download problem, unable to read destination file:
%1.</source>
      <translation>[ОШИБКА]-Не удалось загрузить карту, невозможно открыть целевой файл:
%1.</translation>
    </message>
  </context>
  <context>
    <name>TRoom</name>
    <message>
      <location filename="../src/TRoom.cpp" line="86"/>
      <location filename="../src/TRoom.cpp" line="971"/>
      <source>North</source>
      <translation>Север</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="87"/>
      <source>North-east</source>
      <translation>Северо-восток</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="88"/>
      <source>North-west</source>
      <translation>Северо-запад</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="89"/>
      <location filename="../src/TRoom.cpp" line="1013"/>
      <source>South</source>
      <translation>Юг</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="90"/>
      <source>South-east</source>
      <translation>Юго-восток</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="91"/>
      <source>South-west</source>
      <translation>Юго-запад</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="92"/>
      <location filename="../src/TRoom.cpp" line="1055"/>
      <source>East</source>
      <translation>Восток</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="93"/>
      <location filename="../src/TRoom.cpp" line="1069"/>
      <source>West</source>
      <translation>Запад</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="94"/>
      <location filename="../src/TRoom.cpp" line="1083"/>
      <source>Up</source>
      <translation>Вверх</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="95"/>
      <location filename="../src/TRoom.cpp" line="1097"/>
      <source>Down</source>
      <translation>Вниз</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="96"/>
      <location filename="../src/TRoom.cpp" line="1111"/>
      <source>In</source>
      <translation>В</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="97"/>
      <location filename="../src/TRoom.cpp" line="1125"/>
      <source>Out</source>
      <translation>Из</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="98"/>
      <source>Other</source>
      <translation>Другой</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="100"/>
      <source>Unknown</source>
      <translation>Неизвестно</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="311"/>
      <source>No area created!  Requested area ID=%1. Note: Area IDs must be &gt; 0</source>
      <translation>Область не создана! Запрашиваемая площадь ID=%1. Примечание: ID площадей должны быть &gt; 0</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="333"/>
      <source>Warning: When setting the Area for Room (Id: %1) it did not have a current area!</source>
      <translation>Предупреждение: При установке Зоны для комнаты (Id: %1) у нее нет текущей зоны!</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="985"/>
      <source>Northeast</source>
      <translation>Северо-восток</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="999"/>
      <source>Northwest</source>
      <translation>Северо-запад</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1027"/>
      <source>Southeast</source>
      <translation>Юго-восток</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1041"/>
      <source>Southwest</source>
      <translation>Юго-запад</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1146"/>
      <source>[ WARN ]  - In room id:%1 removing invalid (special) exit to %2 {with no name!}</source>
      <translation>[ ВНИМ ] - В комнате ID:%1 удаление недопустимого (особого) выхода в %2 {без имени!}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1150"/>
      <source>[ WARN ]  - Room had an invalid (special) exit to %1 {with no name!} it was removed.</source>
      <translation>[ ВНИМ ] - В комнате был недопустимый (специальный) выход %1 {без имени!} он был удален.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1159"/>
      <source>[ INFO ]  - In room with id: %1 correcting special exit &quot;%2&quot; that
was to room with an exit to invalid room: %3 to now go
to: %4.</source>
      <translation>[ ИНФО ]  - В комнате с ID: %1 исправлен особый выход &quot;%2&quot; ,
-помещение с выходом в недопустимую комнату: %3 до
до %4.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1169"/>
      <source>[ INFO ]  - Room needed correcting of special exit &quot;%1&quot; that was to room with an exit to invalid room: %2 to now go to: %3.</source>
      <translation>[ИНФОРМАЦИЯ] - Комната нуждалась в корректировке специального выхода &quot;%1&quot; , который находился в комнате с выходом в некорректную комнату: %2 теперь перейти по адресу: %3.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1194"/>
      <source>[ WARN ]  - Room with id: %1 has a special exit &quot;%2&quot; with an
exit to: %3 but that room does not exist.  The exit will
be removed (but the destination room id will be stored in
the room user data under a key:
&quot;%4&quot;).</source>
      <translation>[ ВНИМ ] - Комната с идентификатором: %1 имеет специальный выход &quot;%2&quot; с выходом в: %3 но эта комната не существует.  Выход будет удалён
(но идентификатор назначенной комнаты будет храниться в
данных комнаты пользователя под ключом:
&quot;%4&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1207"/>
      <source>[ WARN ]  - Room has a special exit &quot;%1&quot; with an exit to: %2 but that room does not exist.  The exit will be removed (but the destination room id will be stored in the room user data under a key:&quot;%3&quot;).</source>
      <translation>[ WARN]-В комнате есть специальный выход &quot;%1&quot; с выходом: %2 , но эта комната не существует.  Выход будет удален (но ID места назначения будет храниться в пользовательских данных комнаты под ключом:&quot;%3&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1246"/>
      <source>[ INFO ]  - In room with id: %1 special exit &quot;%2&quot;
that was to room with an invalid room: %3 that does not exist.
The exit will be removed (the bad destination room id will be stored in the
room user data under a key:
&quot;%4&quot;).</source>
      <translation>[ ИНФО ]  - Комната с идентификатором: %1 имеет специальный выход &quot;%2&quot; что имеет выход в: %3 но этой комнаты не существует.  Выход будет удалён
(но идентификатор назначенной комнаты будет храниться в
данных комнаты пользователя под ключом:
&quot;%4&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1259"/>
      <source>[ INFO ]  - Room had special exit &quot;%1&quot; that was to room with an invalid room: %2 that does not exist.  The exit will be removed (the bad destination room id will be stored in the room user data under a key:&quot;%3&quot;).</source>
      <translation>[ ИНФО ]  - Комната имела специальный выход &quot;%1&quot; идущий в: %2 но этой комнаты не существует.  Выход будет удалён
(но помер назначенной комнаты будет храниться в
данных комнаты пользователя под ключом: 
&quot;%3&quot;).</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1292"/>
      <source>%1 {none}</source>
      <translation>%1 {none}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1295"/>
      <source>%1 (open)</source>
      <translation>%1 (открыта)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1298"/>
      <source>%1 (closed)</source>
      <translation>%1 (закрыта)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1301"/>
      <source>%1 (locked)</source>
      <translation>%1 (заблокирована)</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1304"/>
      <source>%1 {invalid}</source>
      <translation>%1 {invalid}</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1308"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus door items that were removed:
%2.</source>
      <translation>[ ИНФО ]  - В комнате с id: %1 обнаружена одна или несколько избыточных  дверей, которые были удалены:
%2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1315"/>
      <source>[ INFO ]  - Room had one or more surplus door items that were removed:%1.</source>
      <translation>[ ИНФО ] - В помещении было удалено одно или несколько помеченных на удаленных элементов дверей:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1331"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus weight items that were removed:
%2.</source>
      <translation>[ ИНФО ]  - В комнате с id: %1 обнаружена одна или несколько избыточных  дверей, которые были удалены:
%2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1338"/>
      <source>[ INFO ]  - Room had one or more surplus weight items that were removed: %1.</source>
      <translation>[ ИНФО ] - В помещении было удалено одно или несколько помеченных на удаленных элементов дверей:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1354"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus exit lock items that were removed:
%2.</source>
      <translation>[ ИНФО ]  - В комнате с id: %1 обнаружена одна или несколько избыточных  запертых дверей, которые были удалены:
%2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1361"/>
      <source>[ INFO ]  - Room had one or more surplus exit lock items that were removed: %1.</source>
      <translation>[ ИНФО ] - В помещении было удалено одно или несколько помеченных на удаленных элементов запертых дверей:%1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1440"/>
      <source>[ INFO ]  - In room with id: %1 found one or more surplus custom line elements that
were removed: %2.</source>
      <translation>[ ИНФО ]  - В комнате с ID: %1 найдена одина или более избыточных пользовательских элементов линии, которые
были удалены: %2.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1446"/>
      <source>[ INFO ]  - Room had one or more surplus custom line elements that were removed: %1.</source>
      <translation>[ ИНФО ]  - В комнате найдена одна или более избыточных пользовательских элементов строки, которые
были удалены: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1469"/>
      <source>[ INFO ]  - In room with id: %1 correcting exit &quot;%2&quot; that was to room with
an exit to invalid room: %3 to now go to: %4.</source>
      <translation>[ ИНФО ]  - В комнате с ID: %1 исправленный выход &quot;%2&quot; что был направлен
в неправильную комнату: %3 теперь направлен в: %4.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1478"/>
      <source>[ INFO ]  - Correcting exit &quot;%1&quot; that was to invalid room id: %2 to now go to: %3.</source>
      <translation>[ПРЕДУПРЕЖДЕНИЕ] - Исправление выхода &quot;%1&quot; , который вел в комнату с недействительным идентификатором : %2 , теперь ведет в: %3.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1489"/>
      <source>[ WARN ]  - Room with id: %1 has an exit &quot;%2&quot; to: %3 but that room
does not exist.  The exit will be removed (but the destination room
Id will be stored in the room user data under a key:
&quot;%4&quot;)
and the exit will be turned into a stub.</source>
      <translation>[ ВНИМ ] - Комната с идентификатором: %1 имеет выход &quot;%2&quot; в: %3 но эта комната не существует. Выход будет удалён
(но идентификатор назначенной комнаты будет храниться в
данных комнаты пользователя под ключом:
&quot;%4&quot;)
Выход будет преобразован в любой другой возможный.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1502"/>
      <source>[ WARN ]  - Room has an exit &quot;%1&quot; to: %2 but that room does not exist.  The exit will be removed (but the destination room id will be stored in the room user data under a key: &quot;%4&quot;) and the exit will be turned into a stub.</source>
      <translation>[ ВНИМ ]  - Комната имеет выход &quot;%1&quot; в: %2 но эта комната не существует. Выход будет удалён
(но номер назначенной комнаты будет храниться в пользовательских данных комнаты под ключом: &quot;%4&quot;)
и выход будет преобразован в незавершенный.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1546"/>
      <source>[ ALERT ] - Room with id: %1 has an exit &quot;%2&quot; to: %3 but also
has a stub exit!  As a real exit precludes a stub, the latter will
be removed.</source>
      <translation>[ ВНИМ ] - Комната с ID: %1 имеет выход &quot;%2&quot; в: %3 , но также
имеет какой-то выход! Реальный выход исключает его, и позже он будет удален.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1556"/>
      <source>[ ALERT ] - Room has an exit &quot;%1&quot; to: %2 but also has a stub exit in the same direction!  As a real exit precludes a stub, the latter will be removed.</source>
      <translation>[ ВНИМ ] - Комната имеет выход &quot;%1&quot; в: %2, но также имеет незавершенный в тоже самом направлении! Реальный выход исключает его, последний будет удален.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1612"/>
      <source>[ INFO ]  - In room with id: %1 exit &quot;%2&quot; that was to room with an invalid
room: %3 that does not exist.  The exit will be removed (the bad destination
room id will be stored in the room user data under a key:
&quot;%4&quot;)
and the exit will be turned into a stub.</source>
      <translation>[ ИНФО ] - Комната с идентификатором: %1 с выходом &quot;%2&quot; что имеет выход в неправильную комнату: %3 которой не существует. Выход будет удалён
(но идентификатор назначенной комнаты будет храниться в
данных комнаты пользователя под ключом:
&quot;%4&quot;)
Выход будет сгенерирован в любой другой возможный.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1623"/>
      <source>[ INFO ]  - Room exit &quot;%1&quot; that was to a room with an invalid id: %2 that does not exist.  The exit will be removed (the bad destination room id will be stored in the room user data under a key:&quot;%4&quot;) and the exit will be turned into a stub.</source>
      <translation>[ ИНФО ] - Выход комнаты &quot;%1&quot; был в комнату с неверным номером: %2 которая не существует.  Выход будет удален (плохой номер комнаты будет сохранен в данных пользователя комнаты под ключом:&quot;%4&quot;) и выход будет преобразован в незавершенный.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1639"/>
      <source>
It was locked, this is recorded as user data with key:
&quot;%1&quot;.</source>
      <translation>
Комната была заперта, это зафиксировано как пользовательское данное с ключом:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1643"/>
      <source>  It was locked, this is recorded as user data with key: &quot;%1&quot;.</source>
      <translation>  
Комната была заперта, это зафиксировано как пользовательское данное с ключом:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1651"/>
      <source>
It had a weight, this is recorded as user data with key:
&quot;%1&quot;.</source>
      <translation>
Комната имела вес, это зафиксировано как пользовательское данное с ключом:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1655"/>
      <source>  It had a weight, this is recorded as user data with key: &quot;%1&quot;.</source>
      <translation>  
Комната имела вес, это зафиксировано как пользовательское данное с ключом:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1666"/>
      <source>[ WARN ]  - There was a custom exit line associated with the invalid exit but
it has not been possible to salvage this, it has been lost!</source>
      <translation>[ ВНИМ ] - Была пользовательская линия выхода, связанная с недопустимым выходом, но
это не удалось спасти, она была потеряна!</translation>
    </message>
    <message>
      <location filename="../src/TRoom.cpp" line="1671"/>
      <source>[ WARN ]  - There was a custom exit line associated with the invalid exit but it has not been possible to salvage this, it has been lost!</source>
      <translation>[ ВНИМ ] - Была пользовательская линия выхода, связанная с недопустимым выходом, но это не удалось спасти, она была потеряна!</translation>
    </message>
  </context>
  <context>
    <name>TRoomDB</name>
    <message>
      <location filename="../src/TRoomDB.cpp" line="504"/>
      <source>Area with ID %1 already exists!</source>
      <translation>Область с ID %1 уже существует!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="523"/>
      <source>An Unnamed Area is (no longer) permitted!</source>
      <translation>Безымянная площадь (больше) не разрешена!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="527"/>
      <source>An area called %1 already exists!</source>
      <translation>Oбласть с именем %1 уже существует!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="626"/>
      <source>[ WARN ]  - Problem with data structure associated with room id: %1 - that
room&apos;s data has been lost so the id is now being deleted.  This
suggests serious problems with the currently running version of
Mudlet - is your system running out of memory?</source>
      <translation>[ ИНФО ]  - Проблема со структурой данных, связанной с комнатой: %1 - данные
комнаты были потеряны, поэтому идентификатор теперь удаляется. Это 
предполагает серьезные проблемы с текущей версией
Mudlet - в вашей системе не хватает ли памяти?</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="634"/>
      <source>[ WARN ]  - Problem with data structure associated with this room.  The room&apos;s data has been lost so the id is now being deleted.  This suggests serious problems with the currently running version of Mudlet - is your system running out of memory?</source>
      <translation>[ ИНФО ]  - Проблема со структурой данных, связанной с етой комнатой. Данныекомнаты были потеряны, поэтому идентификатор теперь удаляется. Это предполагает серьезные проблемы с текущей версией Mudlet - в вашей системе не хватает ли памяти?</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="692"/>
      <source>[ ALERT ] - Area with id: %1 expected but not found, will be created.</source>
      <translation>[ ВНИМ ] - Зона с идентификатором: %1 ожидается, но не найдена, будет создана.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="695"/>
      <source>[ ALERT ] - Area with this id expected but not found, will be created.</source>
      <translation>[ ВНИМ ] - Зона с етом идентификатором ожидается, но не найдена, будет создана.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="740"/>
      <source>[ INFO ]  - The missing area(s) are now called:
(ID) ==&gt; &quot;name&quot;</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation>
        <numerusform>[ ИНФО ]  - Недостающие области теперь называются:
(ID) ==&gt; &quot;имя&quot;</numerusform>
        <numerusform>[ ИНФО ]  - Недостающие области теперь называются:
(ID) ==&gt; &quot;имя&quot;</numerusform>
        <numerusform>[ ИНФО ]  - Недостающие области теперь называются:
(ID) ==&gt; &quot;имя&quot;</numerusform>
        <numerusform>[ ИНФО ]  - Недостающие области теперь называются:
(ID) ==&gt; &quot;имя&quot;</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="775"/>
      <source>[ ALERT ] - Bad, (less than +1 and not the reserved -1) area ids found (count: %1)
in map, now working out what new id numbers to use...</source>
      <translation>[ ВНИМ ] - Найдены неверные (менее +1 и не зарезервированный -1) идентификаторы областей (всего: %1)
на карте, теперь выясняется, какие новые идентификационные номера использовать...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="787"/>
      <source>[ INFO ]  - The renumbered area ids will be:
Old ==&gt; New</source>
      <translation>[ ИНФО ]  - Перенумерованные идентификаторы области будут:
Старый ==&gt; Новый</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="805"/>
      <source>[ INFO ]  - The area with this bad id was renumbered to: %1.</source>
      <translation>[ ИНФО ]  - Область с этим плохим идентификатором была изменена на %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="806"/>
      <source>[ INFO ]  - This area was renumbered from the bad id: %1.</source>
      <translation>[ ИНФО ]  - Эта область была перенумерована с неверного идентификатора: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="843"/>
      <location filename="../src/TRoomDB.cpp" line="846"/>
      <source>[ INFO ]  - Area id numbering is satisfactory.</source>
      <translation>[ ИНФО ] - Нумерация идентификаторов областей является удовлетворительной.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="854"/>
      <source>[ ALERT ] - Bad, (less than +1) room ids found (count: %1) in map, now working
out what new id numbers to use.</source>
      <translation>[ ВНИМ ] - Найдены неверные (менее + и не зарезервированный -1) идентификаторы комнат (всего: %1)
на карте, теперь выясняется, какие новые идентификационные номера использовать.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="724"/>
      <source>[ ALERT ] - %n area(s) detected as missing in map: adding it/them in.
 Look for further messages related to the rooms that are supposed
 to be in this/these area(s)...</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation>
        <numerusform>[ ВНИМ ] - %n область обнаружена как отсутствующая на карте: добавляем иё.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этой области...</numerusform>
        <numerusform>[ ВНИМ ] - %n областей обнаружены как отсутствующие на карте: добавляем их.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этих областях...</numerusform>
        <numerusform>[ ВНИМ ] - %n областей обнаружены как отсутствующие на карте: добавляем их.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этих областях...</numerusform>
        <numerusform>[ ВНИМ ] - %n областей обнаружены как отсутствующие на карте: добавляем их.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этих областях...</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TRoomDB.cpp" line="731"/>
      <source>[ ALERT ] - %n area(s) detected as missing in map: adding it/them in.
 Look for further messages related to the rooms that is/are supposed to
 be in this/these area(s)...</source>
      <comment>Making use of %n to allow quantity dependent message form 8-) !</comment>
      <translation>
        <numerusform>[ ВНИМ ] - %n область обнаружена как отсутствующая на карте: добавляем иё.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этой области...</numerusform>
        <numerusform>[ ВНИМ ] - %n областей обнаружены как отсутствующие на карте: добавляем их.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этих областях...</numerusform>
        <numerusform>[ ВНИМ ] - %n областей обнаружены как отсутствующие на карте: добавляем их.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этих областях...</numerusform>
        <numerusform>[ ВНИМ ] - %n областей обнаружены как отсутствующие на карте: добавляем их.
 Ищите дополнительные сообщения, связанные с комнатами, которые предположительно
 должны находиться в этих областях...</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="780"/>
      <source>[ ALERT ] - Bad, (less than +1 and not the reserved -1) area ids found (count: %1) in map!  Look for further messages related to this for each affected area ...</source>
      <translation>[ ВНИМ ] - Найдены неверные (менее +1 и не зарезервированный -1) идентификаторы областей (всего: %1)
на карте. Сообщения о каждой области последуют...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="859"/>
      <source>[ ALERT ] - Bad, (less than +1) room ids found (count: %1) in map!  Look for further messages related to this for each affected room ...</source>
      <translation>[ ВНИМ ] - Найдены неверные (менее + и не зарезервированный -1) идентификаторы комнат (всего: %1)
на карте. Сообщения о каждой области последуют...</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="866"/>
      <source>[ INFO ]  - The renumbered rooms will be:
</source>
      <translation>[ ИНФО ] - Перенумерованные комнаты будут:
</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="882"/>
      <source>[ INFO ]  - This room with the bad id was renumbered to: %1.</source>
      <translation>[ ИНФО ]  - Комната с плохим идентификатором был перенумерована на %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="883"/>
      <source>[ INFO ]  - This room was renumbered from the bad id: %1.</source>
      <translation>[ ИНФО ]  - Комната была перенумерован с плохого идентификатора: %1.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="919"/>
      <location filename="../src/TRoomDB.cpp" line="922"/>
      <source>[ INFO ]  - Room id numbering is satisfactory.</source>
      <translation>[ ИНФО ] - Нумерация идентификаторов комнат является удовлетворительной.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="946"/>
      <source>[ INFO ]  - Duplicate exit stub identifiers found in room id: %1, this is an
anomaly but has been cleaned up easily.</source>
      <translation>[ ИНФО ]  - В комнате %1 найдены повторяющиеся незаконченные выхода, это аномалия
но было легко выполнить очистку.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="951"/>
      <source>[ INFO ]  - Duplicate exit stub identifiers found in room, this is an anomaly but has been cleaned up easily.</source>
      <translation>[ ИНФО ]  - В етой комнате найдены повторяющиеся незаконченные выхода, это аномалия
но было легко выполнить очистку.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="968"/>
      <source>[ INFO ]  - Duplicate exit lock identifiers found in room id: %1, this is an
anomaly but has been cleaned up easily.</source>
      <translation>[ ИНФО ]  - В комнате %1 найдены повторяющиеся выхода, это аномалия
но было легко выполнить очистку.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="973"/>
      <source>[ INFO ]  - Duplicate exit lock identifiers found in room, this is an anomaly but has been cleaned up easily.</source>
      <translation>[ ИНФО ]  - В етой комнате найдены повторяющиеся выхода, это аномалия
но было легко выполнить очистку.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1060"/>
      <source>[ INFO ]  - This room claims to be in area id: %1, but that did not have a record of it.  The area has been updated to include this room.</source>
      <translation>[ ИНФО ]  - Эта комната утверждает, что находится в зоне id: %1, но у нее не было записи об этом. Площадь была обновлена, чтобы включить этот номер.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1066"/>
      <source>[ INFO ]  - In area with id: %1 there were %2 rooms missing from those it
should be recording as possessing, they were:
%3
they have been added.</source>
      <translation>[ ИНФО ]  - В области с id: %1 отсутствовали %2 комнаты, из которых
должны быть зарегистрированы как обладающие, они были добавлены:
%3</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1074"/>
      <source>[ INFO ]  - In this area there were %1 rooms missing from those it should be recorded as possessing.  They are: %2.  They have been added.</source>
      <translation>[ ИНФО ]  - В этой области отсутствовали %1 комнаты, которые должны быть зарегистрированы к етой области. Они являются: %2. Они были добавлены.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1099"/>
      <source>[ INFO ]  - This room was claimed by area id: %1, but it does not belong there.  The area has been updated to not include this room.</source>
      <translation>[ ИНФО ]  - Эта комната была заявлена областей: %1, но она там не принадлежит. Область была обновлена, чтобы не включать эту комнату.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1105"/>
      <source>[ INFO ]  - In area with id: %1 there were %2 extra rooms compared to those it
should be recording as possessing, they were:
%3
they have been removed.</source>
      <translation>[ ИНФО ]  - В области с ID: %1 были %2 дополнительные комнаты по сравнению с теми которые были записаны как обладающие, они были:
%3
они были убраны.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1113"/>
      <source>[ INFO ]  - In this area there were %1 extra rooms that it should not be recorded as possessing.  They were: %2.  They have been removed.</source>
      <translation>[ ИНФО ]  - в етой области были %1 дополнительные комнаты по сравнению с теми которые были записаны как обладающие, они были: %2. Они были убраны.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1212"/>
      <source>It has been detected that &quot;_###&quot; form suffixes have already been used, for simplicity in the renaming algorithm these will have been removed and possibly changed as Mudlet sorts this matter out, if a number assigned in this way &lt;b&gt;is&lt;/b&gt; important to you, you can change it back, provided you rename the area that has been allocated the suffix that was wanted first...!&lt;/p&gt;</source>
      <translation>Было обнаружено, что &quot;_###&quot; уже были использованы формы суффиксов;, для простоты в алгоритме переименования они были удалены и, возможно изменены, так как Mudlet классифицирует это, если номер, назначенный таким образом &lt;b&gt;имеет значение&lt;/b&gt; важен для вас, вы можете изменить его обратно, при условии переименования области, которая выделила суффикс, который был нужен первым...!&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1216"/>
      <source>[  OK  ]  - The changes made are:
(ID) &quot;old name&quot; ==&gt; &quot;new name&quot;
</source>
      <translation>[  OK  ]  - Изменения сделаны:
(ID) &quot;старое имя&quot; ==&gt; &quot;новое имя&quot;
</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1223"/>
      <source>&lt;nothing&gt;</source>
      <translation>&lt;nothing&gt;</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1226"/>
      <source>[ INFO ]  - Area name changed to prevent duplicates or unnamed ones; old name: &quot;%1&quot;, new name: &quot;%2&quot;.</source>
      <translation>[ ИНФО ] - Имя области изменено для предотвращения дублирования или неназванных; старое имя: &quot;%1&quot;, новое имя: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1235"/>
      <source>[ ALERT ] - Empty and duplicate area names detected in Map file!</source>
      <translation>[ ВНИМ ] - В файле карты обнаружены пустые и повторяющиеся имена областей!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1236"/>
      <source>[ INFO ]  - Due to some situations not being checked in the past,  Mudlet had
allowed the map to have more than one area with the same or no name.
These make some things confusing and are now disallowed.
  To resolve these cases, an area without a name here (or created in
the future) will automatically be assigned the name &quot;%1&quot;.
  Duplicated area names will cause all but the first encountered one
to gain a &quot;_###&quot; style suffix where each &quot;###&quot; is an increasing
number; you may wish to change these, perhaps by replacing them with
a &quot;(sub-area name)&quot; but it is entirely up to you how you do this,
other than you will not be able to set one area&apos;s name to that of
another that exists at the time.
  If there were more than one area without a name then all but the
first will also gain a suffix in this manner.
%2</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1252"/>
      <source>[ ALERT ] - Duplicate area names detected in the Map file!</source>
      <translation>[ ВНИМ ] - В файле карты обнаружены повторяющиеся имена областей!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1253"/>
      <source>[ INFO ]  - Due to some situations not being checked in the past, Mudlet had
allowed the user to have more than one area with the same name.
These make some things confusing and are now disallowed.
  Duplicated area names will cause all but the first encountered one
to gain a &quot;_###&quot; style suffix where each &quot;###&quot; is an increasing
number; you may wish to change these, perhaps by replacing them with
a &quot;(sub-area name)&quot; but it is entirely up to you how you do this,
other then you will not be able to set one area&apos;s name to that of
another that exists at the time.
  If there were more than one area without a name then all but the
first will also gain a suffix in this manner.
%1)</source>
      <translation>[ ИНФО ]  - Из-за того, что некоторые ситуации не проверялись в прошлом, Mudlet 
разрешал карте иметь более чем одну область с одинаковыми именами или без имени.
Это делает некоторые вещи запутанными и теперь запрещено.
  Дублированные имена областей приведут к тому, что все, кроме первой встреченной,
получат &quot;_###&quot; суффикс, где каждый &quot;###&quot; является увеличивающимся числом;
вы можете изменить эти, возможно, заменив их
 &quot;(имя подобласти)&quot;, но это полностью зависит от вас, как вы это сделаете.
Другое, то вы не сможете установить область имя другой, которая уже существует.
  Если было более одной области без имени, то все, кроме
первой, сначала также получат суффикс таким образом.
%1</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1268"/>
      <source>[ ALERT ] - An empty area name was detected in the Map file!</source>
      <translation>[ ВНИМ ] - В файле карты обнаружено пустое имя Зоны!</translation>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1271"/>
      <source>[  OK  ]  - Due to some situations not being checked in the past, Mudlet had
allowed the map to have an area with no name. This can make some
things confusing and is now disallowed.
  To resolve this case, the area without a name here (or one created
in the future) will automatically be assigned the name &quot;%1&quot;.
  If this happens more then once the duplication of area names will
cause all but the first encountered one to gain a &quot;_###&quot; style
suffix where each &quot;###&quot; is an increasing number; you may wish to
change these, perhaps by adding more meaningful area names but it is
entirely up to you what is used, other then you will not be able to
set one area&apos;s name to that of another that exists at the time.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TRoomDB.cpp" line="1295"/>
      <source>[ INFO ]  - Default (reset) area name (for rooms that have not been assigned to an
area) not found, adding &quot;%1&quot; against the reserved -1 id.</source>
      <translation>[ ИНФО ]  - Не найдена область по умолчанию (для комнат, не назначенных к
зоне), добавляется &quot;%1&quot; к зарезервированому ID -1.</translation>
    </message>
  </context>
  <context>
    <name>TTextEdit</name>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1298"/>
      <source>Copy</source>
      <translation>Скопировать</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1309"/>
      <source>Copy HTML</source>
      <translation>Скопировать HTML</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1313"/>
      <source>Copy as image</source>
      <translation>Скопировать картинку</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1316"/>
      <source>Select All</source>
      <translation>Выбрать все</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1321"/>
      <source>Search on %1</source>
      <translation>Поиск по %1</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1339"/>
      <source>Analyse characters</source>
      <translation>Анализировать символы</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1348"/>
      <source>&lt;p&gt;Hover on this item to display the Unicode codepoints in the selection &lt;i&gt;(only the first line!)&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Наведите на этот элемент, чтобы отобразить кодировку Unicode в выделении &lt;i&gt;(только для первой строки!)&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1357"/>
      <source>restore Main menu</source>
      <translation>восстановить главное меню</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1359"/>
      <source>Use this to restore the Main menu to get access to controls.</source>
      <translation>Восстановить главное меню, чтобы получить доступ к элементам управления.</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1361"/>
      <source>restore Main Toolbar</source>
      <translation>восстановить главную панель</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1363"/>
      <source>Use this to restore the Main Toolbar to get access to controls.</source>
      <translation>Восстановить главныю панель инструментов, чтобы получить доступ к элементам управления.</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1439"/>
      <source>Mudlet, debug console extract</source>
      <translation>Mudlet, экстракт консоля отладки</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1441"/>
      <source>Mudlet, %1 mini-console extract from %2 profile</source>
      <translation>Mudlet, экстракт %1 консоля из %2 профиля</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1443"/>
      <source>Mudlet, %1 user window extract from %2 profile</source>
      <translation>Mudlet, экстракт %1 консоля из %2 профиля</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1445"/>
      <source>Mudlet, main console extract from %1 profile</source>
      <translation>Mudlet, основной консоль, извлечение из профиля %1</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1913"/>
      <source>{tab}</source>
      <comment>Unicode U+0009 codepoint.</comment>
      <translation>{tab}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1914"/>
      <source>{line-feed}</source>
      <comment>Unicode U+000A codepoint. Not likely to be seen as it gets filtered out.</comment>
      <translation>{line-feed}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1915"/>
      <source>{carriage-return}</source>
      <comment>Unicode U+000D codepoint. Not likely to be seen as it gets filtered out.</comment>
      <translation>{carriage-return}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1916"/>
      <source>{space}</source>
      <comment>Unicode U+0020 codepoint.</comment>
      <translation>{space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1917"/>
      <source>{non-breaking space}</source>
      <comment>Unicode U+00A0 codepoint.</comment>
      <translation>{non-breaking space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1918"/>
      <source>{soft hyphen}</source>
      <comment>Unicode U+00AD codepoint.</comment>
      <translation>{soft hyphen}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1919"/>
      <source>{combining grapheme joiner}</source>
      <comment>Unicode U+034F codepoint (badly named apparently - see Wikipedia!)</comment>
      <translation>{combining grapheme joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1920"/>
      <source>{ogham space mark}</source>
      <comment>Unicode U+1680 codepoint.</comment>
      <translation>{ogham space mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1921"/>
      <source>{&apos;n&apos; quad}</source>
      <comment>Unicode U+2000 codepoint.</comment>
      <translation>{&apos;n&apos; quad}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1922"/>
      <source>{&apos;m&apos; quad}</source>
      <comment>Unicode U+2001 codepoint.</comment>
      <translation>{&apos;m&apos; quad}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1923"/>
      <source>{&apos;n&apos; space}</source>
      <comment>Unicode U+2002 codepoint - En (&apos;n&apos;) wide space.</comment>
      <translation>{&apos;n&apos; space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1924"/>
      <source>{&apos;m&apos; space}</source>
      <comment>Unicode U+2003 codepoint - Em (&apos;m&apos;) wide space.</comment>
      <translation>{&apos;m&apos; space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1925"/>
      <source>{3-per-em space}</source>
      <comment>Unicode U+2004 codepoint - three-per-em (&apos;m&apos;) wide (thick) space.</comment>
      <translation>{3-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1926"/>
      <source>{4-per-em space}</source>
      <comment>Unicode U+2005 codepoint - four-per-em (&apos;m&apos;) wide (Middle) space.</comment>
      <translation>{4-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1927"/>
      <source>{6-per-em space}</source>
      <comment>Unicode U+2006 codepoint - six-per-em (&apos;m&apos;) wide (Sometimes the same as a Thin) space.</comment>
      <translation>{6-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1928"/>
      <source>{digit space}</source>
      <comment>Unicode U+2007 codepoint - figure (digit) wide space.</comment>
      <translation>{digit space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1929"/>
      <source>{punctuation wide space}</source>
      <comment>Unicode U+2008 codepoint.</comment>
      <translation>{punctuation wide space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1930"/>
      <source>{5-per-em space}</source>
      <comment>Unicode U+2009 codepoint - five-per-em (&apos;m&apos;) wide space.</comment>
      <translation>{5-per-em space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1931"/>
      <source>{hair width space}</source>
      <comment>Unicode U+200A codepoint - thinnest space.</comment>
      <translation>{hair width space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1932"/>
      <source>{zero width space}</source>
      <comment>Unicode U+200B codepoint.</comment>
      <translation>{zero width space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1933"/>
      <source>{Zero width non-joiner}</source>
      <comment>Unicode U+200C codepoint.</comment>
      <translation>{Zero width non-joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1934"/>
      <source>{zero width joiner}</source>
      <comment>Unicode U+200D codepoint.</comment>
      <translation>{zero width joiner}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1935"/>
      <source>{left-to-right mark}</source>
      <comment>Unicode U+200E codepoint.</comment>
      <translation>{left-to-right mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1936"/>
      <source>{right-to-left mark}</source>
      <comment>Unicode U+200F codepoint.</comment>
      <translation>{right-to-left mark}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1937"/>
      <source>{line separator}</source>
      <comment>Unicode 0x2028 codepoint.</comment>
      <translation>{line separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1938"/>
      <source>{paragraph separator}</source>
      <comment>Unicode U+2029 codepoint.</comment>
      <translation>{paragraph separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1939"/>
      <source>{Left-to-right embedding}</source>
      <comment>Unicode U+202A codepoint.</comment>
      <translation>{Left-to-right embedding}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1940"/>
      <source>{right-to-left embedding}</source>
      <comment>Unicode U+202B codepoint.</comment>
      <translation>{right-to-left embedding}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1941"/>
      <source>{pop directional formatting}</source>
      <comment>Unicode U+202C codepoint - pop (undo last) directional formatting.</comment>
      <translation>{pop directional formatting}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1942"/>
      <source>{Left-to-right override}</source>
      <comment>Unicode U+202D codepoint.</comment>
      <translation>{Left-to-right override}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1943"/>
      <source>{right-to-left override}</source>
      <comment>Unicode U+202E codepoint.</comment>
      <translation>{right-to-left override}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1944"/>
      <source>{narrow width no-break space}</source>
      <comment>Unicode U+202F codepoint.</comment>
      <translation>{narrow width no-break space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1945"/>
      <source>{medium width mathematical space}</source>
      <comment>Unicode U+205F codepoint.</comment>
      <translation>{medium width mathematical space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1946"/>
      <source>{zero width non-breaking space}</source>
      <comment>Unicode U+2060 codepoint.</comment>
      <translation>{zero width non-breaking space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1947"/>
      <source>{function application}</source>
      <comment>Unicode U+2061 codepoint - function application (whatever that means!)</comment>
      <translation>{function application}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1948"/>
      <source>{invisible times}</source>
      <comment>Unicode U+2062 codepoint.</comment>
      <translation>{invisible times}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1949"/>
      <source>{invisible separator}</source>
      <comment>Unicode U+2063 codepoint - invisible separator or comma.</comment>
      <translation>{invisible separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1950"/>
      <source>{invisible plus}</source>
      <comment>Unicode U+2064 codepoint.</comment>
      <translation>{invisible plus}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1951"/>
      <source>{left-to-right isolate}</source>
      <comment>Unicode U+2066 codepoint.</comment>
      <translation>{left-to-right isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1952"/>
      <source>{right-to-left isolate}</source>
      <comment>Unicode U+2067 codepoint.</comment>
      <translation>{right-to-left isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1953"/>
      <source>{first strong isolate}</source>
      <comment>Unicode U+2068 codepoint.</comment>
      <translation>{first strong isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1954"/>
      <source>{pop directional isolate}</source>
      <comment>Unicode U+2069 codepoint - pop (undo last) directional isolate.</comment>
      <translation>{pop directional isolate}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1955"/>
      <source>{inhibit symmetrical swapping}</source>
      <comment>Unicode U+206A codepoint.</comment>
      <translation>{inhibit symmetrical swapping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1956"/>
      <source>{activate symmetrical swapping}</source>
      <comment>Unicode U+206B codepoint.</comment>
      <translation>{activate symmetrical swapping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1957"/>
      <source>{inhibit arabic form-shaping}</source>
      <comment>Unicode U+206C codepoint.</comment>
      <translation>{inhibit arabic form-shaping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1958"/>
      <source>{activate arabic form-shaping}</source>
      <comment>Unicode U+206D codepoint.</comment>
      <translation>{activate arabic form-shaping}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1959"/>
      <source>{national digit shapes}</source>
      <comment>Unicode U+206E codepoint.</comment>
      <translation>{national digit shapes}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1960"/>
      <source>{nominal Digit shapes}</source>
      <comment>Unicode U+206F codepoint.</comment>
      <translation>{nominal Digit shapes}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1961"/>
      <source>{ideographic space}</source>
      <comment>Unicode U+3000 codepoint - ideographic (CJK Wide) space</comment>
      <translation>{ideographic space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1962"/>
      <source>{variation selector 1}</source>
      <comment>Unicode U+FE00 codepoint.</comment>
      <translation>{variation selector 1}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1963"/>
      <source>{variation selector 2}</source>
      <comment>Unicode U+FE01 codepoint.</comment>
      <translation>{variation selector 2}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1964"/>
      <source>{variation selector 3}</source>
      <comment>Unicode U+FE02 codepoint.</comment>
      <translation>{variation selector 3}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1965"/>
      <source>{variation selector 4}</source>
      <comment>Unicode U+FE03 codepoint.</comment>
      <translation>{variation selector 4}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1966"/>
      <source>{variation selector 5}</source>
      <comment>Unicode U+FE04 codepoint.</comment>
      <translation>{variation selector 5}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1967"/>
      <source>{variation selector 6}</source>
      <comment>Unicode U+FE05 codepoint.</comment>
      <translation>{variation selector 6}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1968"/>
      <source>{variation selector 7}</source>
      <comment>Unicode U+FE06 codepoint.</comment>
      <translation>{variation selector 7}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1969"/>
      <source>{variation selector 8}</source>
      <comment>Unicode U+FE07 codepoint.</comment>
      <translation>{variation selector 8}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1970"/>
      <source>{variation selector 9}</source>
      <comment>Unicode U+FE08 codepoint.</comment>
      <translation>{variation selector 9}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1971"/>
      <source>{variation selector 10}</source>
      <comment>Unicode U+FE09 codepoint.</comment>
      <translation>{variation selector 10}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1972"/>
      <source>{variation selector 11}</source>
      <comment>Unicode U+FE0A codepoint.</comment>
      <translation>{variation selector 11}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1973"/>
      <source>{variation selector 12}</source>
      <comment>Unicode U+FE0B codepoint.</comment>
      <translation>{variation selector 12}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1974"/>
      <source>{variation selector 13}</source>
      <comment>Unicode U+FE0C codepoint.</comment>
      <translation>{variation selector 13}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1975"/>
      <source>{variation selector 14}</source>
      <comment>Unicode U+FE0D codepoint.</comment>
      <translation>{variation selector 14}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1976"/>
      <source>{variation selector 15}</source>
      <comment>Unicode U+FE0E codepoint - after an Emoji codepoint forces the textual (black &amp; white) rendition.</comment>
      <translation>{variation selector 15}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1977"/>
      <source>{variation selector 16}</source>
      <comment>Unicode U+FE0F codepoint - after an Emoji codepoint forces the proper coloured &apos;Emoji&apos; rendition.</comment>
      <translation>{variation selector 16}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1978"/>
      <source>{zero width no-break space}</source>
      <comment>Unicode U+FEFF codepoint - also known as the Byte-order-mark at start of text!).</comment>
      <translation>{zero width no-break space}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1984"/>
      <source>{interlinear annotation anchor}</source>
      <comment>Unicode U+FFF9 codepoint.</comment>
      <translation>{interlinear annotation anchor}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1985"/>
      <source>{interlinear annotation separator}</source>
      <comment>Unicode U+FFFA codepoint.</comment>
      <translation>{interlinear annotation separator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1986"/>
      <source>{interlinear annotation terminator}</source>
      <comment>Unicode U+FFFB codepoint.</comment>
      <translation>{interlinear annotation terminator}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1987"/>
      <source>{object replacement character}</source>
      <comment>Unicode U+FFFC codepoint.</comment>
      <translation>{object replacement character}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="1999"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint in range U+FFD0 to U+FDEF - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2001"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint in range U+FFFx - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2010"/>
      <source>{FitzPatrick modifier 1 or 2}</source>
      <comment>Unicode codepoint U+0001F3FB - FitzPatrick modifier (Emoji Human skin-tone) 1-2.</comment>
      <translation>{FitzPatrick modifier 1 or 2}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2011"/>
      <source>{FitzPatrick modifier 3}</source>
      <comment>Unicode codepoint U+0001F3FC - FitzPatrick modifier (Emoji Human skin-tone) 3.</comment>
      <translation>{FitzPatrick modifier 3}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2012"/>
      <source>{FitzPatrick modifier 4}</source>
      <comment>Unicode codepoint U+0001F3FD - FitzPatrick modifier (Emoji Human skin-tone) 4.</comment>
      <translation>{FitzPatrick modifier 4}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2013"/>
      <source>{FitzPatrick modifier 5}</source>
      <comment>Unicode codepoint U+0001F3FE - FitzPatrick modifier (Emoji Human skin-tone) 5.</comment>
      <translation>{FitzPatrick modifier 5}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2014"/>
      <source>{FitzPatrick modifier 6}</source>
      <comment>Unicode codepoint U+0001F3FF - FitzPatrick modifier (Emoji Human skin-tone) 6.</comment>
      <translation>{FitzPatrick modifier 6}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2018"/>
      <source>{noncharacter}</source>
      <comment>Unicode codepoint is U+00xxFFFE or U+00xxFFFF - not a character.</comment>
      <translation>{noncharacter}</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2289"/>
      <location filename="../src/TTextEdit.cpp" line="2351"/>
      <source>Index (UTF-16)</source>
      <comment>1st Row heading for Text analyser output, table item is the count into the QChars/TChars that make up the text {this translation used 2 times}</comment>
      <translation>Индекс (UTF-16)</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2292"/>
      <location filename="../src/TTextEdit.cpp" line="2353"/>
      <source>U+&lt;i&gt;####&lt;/i&gt; Unicode Code-point &lt;i&gt;(High:Low Surrogates)&lt;/i&gt;</source>
      <comment>2nd Row heading for Text analyser output, table item is the unicode code point (will be between 000001 and 10FFFF in hexadecimal) {this translation used 2 times}</comment>
      <translation>U +&lt;i&gt;####&lt;/i&gt; Код Unicode &lt;i&gt;(Верхний: Нижний Суррогаты)&lt;/i&gt;</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2296"/>
      <location filename="../src/TTextEdit.cpp" line="2357"/>
      <source>Visual</source>
      <comment>3rd Row heading for Text analyser output, table item is a visual representation of the character/part of the character or a &apos;{&apos;...&apos;}&apos; wrapped letter code if the character is whitespace or otherwise unshowable {this translation used 2 times}</comment>
      <translation>Отображение</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2300"/>
      <location filename="../src/TTextEdit.cpp" line="2361"/>
      <source>Index (UTF-8)</source>
      <comment>4th Row heading for Text analyser output, table item is the count into the bytes that make up the UTF-8 form of the text that the Lua system uses {this translation used 2 times}</comment>
      <translation>Индекс (UTF-8)</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2304"/>
      <location filename="../src/TTextEdit.cpp" line="2365"/>
      <source>Byte</source>
      <comment>5th Row heading for Text analyser output, table item is the unsigned 8-bit integer for the particular byte in the UTF-8 form of the text that the Lua system uses {this translation used 2 times}</comment>
      <translation>Байт</translation>
    </message>
    <message>
      <location filename="../src/TTextEdit.cpp" line="2308"/>
      <location filename="../src/TTextEdit.cpp" line="2369"/>
      <source>Lua character or code</source>
      <comment>6th Row heading for Text analyser output, table item is either the ASCII character or the numeric code for the byte in the row about this item in the table, as displayed the thing shown can be used in a Lua string entry to reproduce this byte {this translation used 2 times}</comment>
      <translation>Lua символ или код</translation>
    </message>
  </context>
  <context>
    <name>TToolBar</name>
    <message>
      <location filename="../src/TToolBar.cpp" line="74"/>
      <source>Toolbar - %1 - %2</source>
      <translation>Панель инструментов - %1 - %2</translation>
    </message>
  </context>
  <context>
    <name>TTrigger</name>
    <message>
      <location filename="../src/TTrigger.cpp" line="192"/>
      <source>Error: This trigger has no patterns defined, yet. Add some to activate it.</source>
      <translation>Ошибка: в этом триггере не определен ни один шаблон. Добавьте некоторые, чтобы активировать его.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="223"/>
      <source>Error: in item %1, perl regex &quot;%2&quot; failed to compile, reason: &quot;%3&quot;.</source>
      <translation>Ошибка: в %1, шаблон: &quot;%2&quot;, неверное регулярное выражение, причина: &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="244"/>
      <source>Error: in item %1, lua function &quot;%2&quot; failed to compile, reason: &quot;%3&quot;.</source>
      <translation>Ошибка: в %1, Lua условие &quot;%2&quot;, не удалось скомпилировать, причина: &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="264"/>
      <source>Error: in item %1, no colors to match were set - at least &lt;i&gt;one&lt;/i&gt; of the foreground or background must not be &lt;i&gt;ignored&lt;/i&gt;.</source>
      <translation>Ошибка: в элементе %1 не было задано ни одного цвета - по крайней мере &lt;i&gt;один&lt;/i&gt; не должен быть &lt;i&gt;, игнорирован&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="320"/>
      <location filename="../src/TTrigger.cpp" line="390"/>
      <source>[Trigger Error:] %1 capture group limit exceeded, capture less groups.
</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/TTrigger.cpp" line="1150"/>
      <source>Trigger name=%1 expired.
</source>
      <translation>Триггер=%1 истек.
</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/TTrigger.cpp" line="1155"/>
      <source>Trigger name=%1 will fire %n more time(s).
</source>
      <translation>
        <numerusform>Триггер=%1 сработает ещё %n раз.
</numerusform>
        <numerusform>Триггер=%1 сработает ещё %n раз.
</numerusform>
        <numerusform>Триггер=%1 сработает ещё %n раз.
</numerusform>
        <numerusform>Триггер=%1 сработает ещё %n раз.
</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>UpdateDialog</name>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="20"/>
      <source>%APPNAME% update</source>
      <translation>%APPNAME% обновление</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="50"/>
      <source>Loading update information …</source>
      <translation>Загрузка информации о обновлении …</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="87"/>
      <source>A new version of %APPNAME% is available!</source>
      <translation>Доступна новая версия %APPNAME%!</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="113"/>
      <source>%APPNAME% %UPDATE_VERSION% is available (you have %CURRENT_VERSION%).
Would you like to update now?</source>
      <translation>%APPNAME% %UPDATE_VERSION% доступен (у вас %CURRENT_VERSION%).
Обновить сейчас?</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="151"/>
      <source>Changelog for %APPNAME%</source>
      <translation>Список изменений для %APPNAME%</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="161"/>
      <source>You are using version %CURRENT_VERSION%.</source>
      <translation>Вы используете версию %CURRENT_VERSION%.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="192"/>
      <source>There are currently no updates available.</source>
      <translation>В настоящее время нет новых обновлений.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="208"/>
      <source>You are using %APPNAME% %CURRENT_VERSION%.</source>
      <translation>Вы используете %APPNAME% %CURRENT_VERSION%.</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="321"/>
      <source>Automatically download future updates</source>
      <translation>Автоматически загружать будущие обновления</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="368"/>
      <source>Cancel</source>
      <translation>Отменить</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="388"/>
      <source>Install update now</source>
      <translation>Установить обновление</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="395"/>
      <source>OK</source>
      <translation>ОК</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="405"/>
      <source>Remind me later</source>
      <translation>Напомнить позже</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.ui" line="410"/>
      <source>Skip this version</source>
      <translation>Пропустить эту версию</translation>
    </message>
    <message>
      <location filename="../3rdparty/dblsqd/dblsqd/update_dialog.cpp" line="555"/>
      <source>Could not open downloaded file %1</source>
      <translation>Не удалось открыть загруженный файл %1</translation>
    </message>
  </context>
  <context>
    <name>Updater</name>
    <message>
      <location filename="../src/updater.cpp" line="46"/>
      <location filename="../src/updater.cpp" line="195"/>
      <location filename="../src/updater.cpp" line="261"/>
      <source>Update</source>
      <translation>Обновить</translation>
    </message>
    <message>
      <location filename="../src/updater.cpp" line="359"/>
      <source>Restart to apply update</source>
      <translation>Перезагрузить для обновления</translation>
    </message>
  </context>
  <context>
    <name>XMLimport</name>
    <message>
      <location filename="../src/XMLimport.cpp" line="165"/>
      <source>[ ALERT ] - Sorry, the file being read:
&quot;%1&quot;
reports it has a version (%2) it must have come from a later Mudlet version,
and this one cannot read it, you need a newer Mudlet!</source>
      <translation>[ ВНИМ ] - К сожалению, читаемый файл:
&quot;%1&quot;
сообщает, что он имеет версию (%2) - он должен быть из более поздней версии Mudlet,
и ета не может прочитать его, вам необходима более новая Mudlet!</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="353"/>
      <source>Parsing area data...</source>
      <translation>Анализ области...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="357"/>
      <source>Parsing room data...</source>
      <translation>Анализ комнат...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="361"/>
      <source>Parsing environment data...</source>
      <translation>Анализ данных среды...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="369"/>
      <source>Assigning rooms to their areas...</source>
      <translation>Присвоение комнат к своим областьям...</translation>
    </message>
    <message>
      <location filename="../src/XMLimport.cpp" line="526"/>
      <source>Parsing room data [count: %1]...</source>
      <translation>Анализ комнат [всего: %1]...</translation>
    </message>
  </context>
  <context>
    <name>about_dialog</name>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="41"/>
      <source>About Mudlet</source>
      <translation>О Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="122"/>
      <source>Mudlet</source>
      <translation>Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="185"/>
      <source>Supporters</source>
      <translation>Сторонники</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="214"/>
      <source>License</source>
      <translation>Лицензия</translation>
    </message>
    <message>
      <location filename="../src/ui/about_dialog.ui" line="249"/>
      <source>Third Party</source>
      <translation>Сторонние</translation>
    </message>
  </context>
  <context>
    <name>actions_main_area</name>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="62"/>
      <source>Name:</source>
      <translation>Имя:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="115"/>
      <source>Button Bar Properties</source>
      <translation>Свойства панели кнопок</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="127"/>
      <source>Number of columns/rows (depending on orientation):</source>
      <translation>Количество столбцов/строк (в зависимости от ориентации):</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="150"/>
      <source>Orientation Horizontal</source>
      <translation>Горизонтальная ориентация</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="155"/>
      <source>Orientation Vertical</source>
      <translation>Вертикальная ориентация</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="170"/>
      <source>Dock Area Top</source>
      <translation>Док Топ</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="175"/>
      <source>Dock Area Left</source>
      <translation>Док Слева</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="180"/>
      <source>Dock Area Right</source>
      <translation>Док Справа</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="185"/>
      <source>Floating Toolbar</source>
      <translation>Плавающая Панель Инструментов</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="208"/>
      <source>Button Properties</source>
      <translation>Свойства кнопки</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="214"/>
      <source>Button Rotation:</source>
      <translation>Поворот кнопки:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="231"/>
      <source>no rotation</source>
      <translation>без вращения</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="236"/>
      <source>90° rotation to the left</source>
      <translation>поворот на 90° влево</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="241"/>
      <source>90° rotation to the right</source>
      <translation>поворот на 90° вправо</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="249"/>
      <source>Push down button</source>
      <translation>Push-кнопка</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="256"/>
      <source>Command:</source>
      <translation>Команда:</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="266"/>
      <source>&lt;p&gt;Type in one or more commands you want the button to send directly to the game if it is pressed. (Optional)&lt;/p&gt;&lt;p&gt;If this is a &lt;i&gt;push-down&lt;/i&gt; button then this is sent only when the button goes from the &lt;i&gt;up&lt;/i&gt; to &lt;i&gt;down&lt;/i&gt; state.&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Введите одну или несколько команд, которые вы хотите чтобы кнопка послала в игру когда она нажата. (Необязательно)&lt;/p&gt;&lt;p&gt;Если это кнопка &lt;i&gt;с нажатием&lt;/i&gt;, то она отправляется только тогда, когда кнопка переходит из состояния &lt;i&gt;вверх&lt;/i&gt; в состояние &lt;i&gt;вниз&lt;/i&gt; .&lt;/p&gt;&lt;p&gt;Для отправки более сложных команд, которые могут зависеть от переменных в этом профиле скрипт Lua должен быть введен &lt;i&gt;вместо&lt;/i&gt; в области редактора ниже. Все, что вводится здесь, буквально, просто отправляется на игровой сервер.&lt;/p&gt;&lt;p&gt;Можно использовать как это &lt;i&gt;и&lt;/i&gt; скрипт Lua - команда тут будет отправлена &lt;b&gt;до того, как будет запущен скрипт&lt;/b&gt; .&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="269"/>
      <location filename="../src/ui/actions_main_area.ui" line="289"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Текст для отправки в игру как есть (опционально)</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="286"/>
      <source>&lt;p&gt;Type in one or more commands you want the button to send directly to the game when this button goes from the &lt;i&gt;down&lt;/i&gt; to &lt;i&gt;up&lt;/i&gt; state.&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="276"/>
      <source>Command (up):</source>
      <translation>Команда (вверх):</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="72"/>
      <source>&lt;p&gt;Choose a good, ideally unique, name for your button, menu or toolbar. This will be displayed in the buttons tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите хорошее (в идеале уникальное) имя для кнопки, меню или панели кнопок. Это будет показано в списке кнопок.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/actions_main_area.ui" line="308"/>
      <source>Stylesheet:</source>
      <translation>Таблица стилей CSS:</translation>
    </message>
  </context>
  <context>
    <name>aliases_main_area</name>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="35"/>
      <source>Name:</source>
      <translation>Имя:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="57"/>
      <source>choose a unique name for your alias; it will show in the tree and is needed for scripting.</source>
      <translation>выберите уникальное имя для псевдонима; оно будет показано в списке и должно быть указано в сценариях.</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="76"/>
      <source>Pattern:</source>
      <translation>Шаблон:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="103"/>
      <source>enter a perl regex pattern for your alias; alias are triggers on your input</source>
      <translation>введите шаблон regex perl для алиаса; алиасы - это риггеры для вашего ввода</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="110"/>
      <source>Type:</source>
      <translation>Тип:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="124"/>
      <source>Regex</source>
      <translation>Регулярное выражение</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="129"/>
      <source>Plain</source>
      <translation>Просто текст</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="149"/>
      <source>Command:</source>
      <translation>Команда:</translation>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="171"/>
      <source>&lt;p&gt;Type in one or more commands you want the alias to send directly to the game if the keys entered match the pattern. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/aliases_main_area.ui" line="174"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Текст для отправки в игру как есть (опционально)</translation>
    </message>
  </context>
  <context>
    <name>cTelnet</name>
    <message>
      <location filename="../src/ctelnet.cpp" line="609"/>
      <source>[ INFO ]  - The IP address of %1 has been found. It is: %2
</source>
      <translation>[ ИНФО ] - IP-адрес %1 был найден. Это: %2
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="618"/>
      <source>[ ERROR ] - Host name lookup Failure!
Connection cannot be established.
The server name is not correct, not working properly,
or your nameservers are not working properly.</source>
      <translation>[ ОШИБКА ] - Ошибка поиска имени хоста!
Невозможно установить соединение.
Имя сервера не правильно, не работает должным образом,
или ваши серверы имен не работают должным образом.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="449"/>
      <source>[ ERROR ] - TCP/IP socket ERROR:</source>
      <translation>[ ОШИБКА ] - ошибка TCP/IP сокета:</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="476"/>
      <source>[ INFO ]  - A secure connection has been established successfully.</source>
      <translation>[ ИНФО ] - Защищенное соединение установлено успешно.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="478"/>
      <source>[ INFO ]  - A connection has been established successfully.</source>
      <translation>[ ИНФО ] - Соединение установлено успешно.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="514"/>
      <source>[ INFO ]  - Connection time: %1
    </source>
      <translation>[ ИНФО ] - Время соединения: %1
    </translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="557"/>
      <source>Secure connections aren&apos;t supported by this game on this port - try turning the option off.</source>
      <translation>Защищенные соединения не поддерживаются этой игрой на этом порту - попробуйте выключить опцию.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="602"/>
      <source>[ INFO ]  - Trying secure connection to %1: %2 ...
</source>
      <translation>[ ИНФО ] - Попытка защищенного соединения с %1: %2 ...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1662"/>
      <location filename="../src/ctelnet.cpp" line="2030"/>
      <source>[ INFO ]  - The server wants to upgrade the GUI to new version &apos;%1&apos;.
Uninstalling old version &apos;%2&apos;.</source>
      <translation>[ ИНФО ]  - Сервер хочет обновить графический интерфейс до новой версии &apos;%1&apos;.
Деинсталлируется старая версия &apos;%2&apos;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1673"/>
      <location filename="../src/ctelnet.cpp" line="2041"/>
      <source>[  OK  ]  - Package is already installed.</source>
      <translation>[  OK  ]  - Пакет уже установлен.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1682"/>
      <location filename="../src/ctelnet.cpp" line="2050"/>
      <source>downloading game GUI from server</source>
      <translation>загрузка интерфейса с сервера</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1682"/>
      <location filename="../src/ctelnet.cpp" line="2050"/>
      <source>Cancel</source>
      <comment>Cancel download of GUI package from Server</comment>
      <translation>Отменить</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="1671"/>
      <location filename="../src/ctelnet.cpp" line="2039"/>
      <source>[ INFO ]  - Server offers downloadable GUI (url=&apos;%1&apos;) (package=&apos;%2&apos;).</source>
      <translation>[ ИНФО ]  - Сервер предлагает загружаемый интерфейс (адрес=&apos;%1&apos;) (пакет=&apos;%2&apos;).</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="418"/>
      <source>[ INFO ]  - Looking up the IP address of server: %1:%2 ...</source>
      <translation>[ ИНФО ] - Поиск IP-адреса сервера: %1:%2 ...</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="516"/>
      <source>hh:mm:ss.zzz</source>
      <comment>This is the format to be used to show the profile connection time, it follows the rules of the &quot;QDateTime::toString(...)&quot; function and may need modification for some locales, e.g. France, Spain.</comment>
      <translation>hh:mm:ss.zzz</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="547"/>
      <location filename="../src/ctelnet.cpp" line="559"/>
      <source>[ ALERT ] - Socket got disconnected.
Reason: </source>
      <translation>[ ВНИМ ] - Подключение отключилось.
Причина: </translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="611"/>
      <source>[ INFO ]  - Trying to connect to %1:%2 ...
</source>
      <translation>[ ИНФО ] - Идёт подключение к %1: %2 ...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="613"/>
      <source>[ INFO ]  - Trying to connect to %1:%2 via proxy...
</source>
      <translation>[ ИНФО ] - Идёт подключение к %1: %2 через прокси...
</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="660"/>
      <source>[ ERROR ] - Internal error, no codec found for current setting of {&quot;%1&quot;}
so Mudlet cannot send data in that format to the Game Server. Please
check to see if there is an alternative that the MUD and Mudlet can
use. Mudlet will attempt to send the data using the ASCII encoding
but will be limited to only unaccented characters of basic English.
Note: this warning will only be issued once, until the encoding is
changed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2334"/>
      <source>ERROR</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>ОШИБКА</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2346"/>
      <source>LUA</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>Lua</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2357"/>
      <source>WARN</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>ВНИМ</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2368"/>
      <source>ALERT</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>ВНИМ</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2379"/>
      <source>INFO</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>ИНФО</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2390"/>
      <source>OK</source>
      <comment>Keep the capisalisation, the translated text at 7 letters max so it aligns nicely</comment>
      <translation>ОК</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2573"/>
      <source>[ INFO ]  - Loading replay file:
&quot;%1&quot;.</source>
      <translation>[ ИНФО ] - Загружается повтор журнала:
&quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2592"/>
      <source>Cannot perform replay, another one may already be in progress. Try again when it has finished.</source>
      <translation>Невозможно выполнить повтор, возможно, уже выполняется другой. Повторите попытку, когда он будет завершен.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2594"/>
      <source>[ WARN ]  - Cannot perform replay, another one may already be in progress.
Try again when it has finished.</source>
      <translation>[ ВНИМ ] - Невозможно выполнить повтор, возможно, уже выполняется другой.
Повторите попытку, когда он будет завершен.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2602"/>
      <source>Cannot read file &quot;%1&quot;, error message was: &quot;%2&quot;.</source>
      <translation>Не удается прочитать файл &quot;%1&quot;, сообщение об ошибке было: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2605"/>
      <source>[ ERROR ] - Cannot read file &quot;%1&quot;,
error message was: &quot;%2&quot;.</source>
      <translation>[ ОШИБКА ] - Невозможно прочитать файл &quot;%1&quot;,
сообщение об ошибке было: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/ctelnet.cpp" line="2633"/>
      <source>[  OK  ]  - The replay has ended.</source>
      <translation>[ ОК ] - повтор завершился.</translation>
    </message>
  </context>
  <context>
    <name>color_trigger</name>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="17"/>
      <source>ANSI 256 Color chooser</source>
      <translation>Выбор цвета ANSI 256</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="39"/>
      <source>&lt;small&gt;Choose:&lt;ul&gt;&lt;li&gt;one of the basic 16 colors below&lt;/li&gt;
&lt;li&gt;click the &lt;i&gt;more&lt;/i&gt; button to get access to other colors in the 256-color set, then follow the instructions to select a color from that part of the 256 colors supported; if such a color is already in use then that part will already be showing&lt;/li&gt;
&lt;li&gt;click the &lt;i&gt;Default&lt;/i&gt; or &lt;i&gt;Ignore&lt;/i&gt; buttons at the bottom for a pair of other special cases&lt;/li&gt;
&lt;li&gt;click &lt;i&gt;Cancel&lt;/i&gt; to close this dialog without making any changes&lt;/li&gt;&lt;/ul&gt;&lt;/small&gt;</source>
      <comment>Ensure that &quot;Default&quot;, &quot;Ignore&quot; and &quot;Cancel&quot; in this instruction are the same as used for the controls elsewhere on this dialog.</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="58"/>
      <source>Basic ANSI Colors [0-15] - click a button to select that color number directly:</source>
      <translation>Основные цвета ANSI [0-15] - нажмите кнопку, чтобы выбрать этот номер цвета напрямую:</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="240"/>
      <source>ANSI 6R x 6G x 6B Colors [16-231] - adjust red, green, blue and click button to select matching color number:</source>
      <translation>ANSI 6R x 6G x 6B Цвета [16-231] - отрегулируйте красный, зеленый, синий и нажмите кнопку, чтобы выбрать соответствующий номер цвета:</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="252"/>
      <source>Red (0-5)</source>
      <translation>Красный (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="262"/>
      <source>Green (0-5)</source>
      <translation>Зеленый (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="272"/>
      <source>Blue (0-5)</source>
      <translation>Синий (0-5)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="282"/>
      <source>16 + 36 x R + 6 x G + B =</source>
      <translation>16 + 36 x R + 6 x G + B =</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="343"/>
      <source>[16]</source>
      <translation>[16]</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="353"/>
      <source>Set to RGB value</source>
      <translation>Установить значение RGB</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="363"/>
      <source>ANSI 24 Grays scale [232-255] - adjust gray and click button to select matching color number:</source>
      <translation>ANSI 24 Grays scale [232-255] - настройте серый цвет и нажмите кнопку, чтобы выбрать соответствующий номер цвета:</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="375"/>
      <source>Gray (0-23)</source>
      <translation>Серый (0-23)</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="382"/>
      <source>232 + Gr =</source>
      <translation>232 + Gr =</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="414"/>
      <source>[232]</source>
      <translation>[232]</translation>
    </message>
    <message>
      <location filename="../src/ui/color_trigger.ui" line="424"/>
      <source>Set to Grayscale value</source>
      <translation>Значение в оттенках серого</translation>
    </message>
  </context>
  <context>
    <name>composer</name>
    <message>
      <location filename="../src/ui/composer.ui" line="14"/>
      <source>News and Message Composer</source>
      <translation>Компоновщик сообщений</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="86"/>
      <source>Cancel</source>
      <translation>Отменить</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="99"/>
      <source>&lt;p&gt;Save (&lt;span style=&quot; color:#565656;&quot;&gt;Shift+Tab&lt;/span&gt;)&lt;/p&gt;</source>
      <translation>&lt;p&gt;Сохранить (&lt;span style=&quot; color:#565656;&quot;&gt;Shift+Tab&lt;/span&gt;)&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/composer.ui" line="102"/>
      <source>Save</source>
      <translation>Сохранить</translation>
    </message>
  </context>
  <context>
    <name>connection_profiles</name>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="20"/>
      <source>Select a profile to connect with</source>
      <translation>Выберите профиль для подключения</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="101"/>
      <source>profiles list</source>
      <translation>список профилей</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="363"/>
      <source>Remove</source>
      <translation>Удалить</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="382"/>
      <source>Copy</source>
      <translation>Скопировать</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="407"/>
      <source>New</source>
      <translation>Новый профиль</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="462"/>
      <source>welcome message</source>
      <translation>приветствие</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="478"/>
      <source>Required</source>
      <translation>Обязательно</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="484"/>
      <source>Profile name:</source>
      <translation>Имя профиля:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="500"/>
      <source>Profile name</source>
      <translation>Имя профиля</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="503"/>
      <source>A unique name for the profile but which is limited to a subset of ascii characters only.</source>
      <comment>Using lower case letters for &apos;ASCII&apos; may make speech synthesisers say &apos;askey&apos; which is quicker than &apos;Aay Ess Cee Eye Eye&apos;!</comment>
      <translation>Уникальное имя для профиля, но которое ограничено только подмножеством символов ascii.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="513"/>
      <source>Server address:</source>
      <translation>Адрес сервера:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="535"/>
      <source>Game server URL</source>
      <translation>Адрес игрового сервера</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="538"/>
      <source>The Internet host name or IP address</source>
      <translation>Имя или IP-адрес игрового сервера</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="545"/>
      <source>Port:</source>
      <translation>Порт:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="573"/>
      <source>Game server port</source>
      <translation>Порт игрового сервера</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="576"/>
      <source>The port that is used together with the server name to make the connection to the game server. If not specified a default of 23 for &quot;Telnet&quot; connections is used. Secure connections may require a different port number.</source>
      <translation>Порт, который используется вместе с именем сервера для подключения к игровому серверу. Если не указано значение по умолчанию 23 для &quot;Telnet&quot; соединений используется. Для безопасных соединений может потребоваться другой номер порта.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="595"/>
      <source>Connect via a secure protocol</source>
      <translation>Подключиться через защищенный протокол</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="598"/>
      <source>Make Mudlet use a secure SSL/TLS protocol instead of an unencrypted one</source>
      <translation>Сделать Mudlet использовать безопасный протокол SSL/TLS вместо незашифрованного</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="604"/>
      <source>Secure:</source>
      <translation>Зашищенный:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="611"/>
      <source>Profile history:</source>
      <translation>История профиля:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="634"/>
      <source>load newest profile</source>
      <translation>загрузить новейший профиль</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="639"/>
      <source>load oldest profile</source>
      <translation>загрузить старейший профиль</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="662"/>
      <source>Optional</source>
      <translation>Дополнительно</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="678"/>
      <source>Character name:</source>
      <translation>Имя персонажа:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="688"/>
      <source>The characters name</source>
      <translation>Имя персонажа</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="691"/>
      <source>Character name</source>
      <translation>Имя персонажа</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="694"/>
      <source>If provided will be sent, along with password to identify the user in the game.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="713"/>
      <source>Auto-open profile</source>
      <translation>Автоматически открыть профайл</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="716"/>
      <source>Automatically start this profile when Mudlet is run</source>
      <translation>Автоматически запускать этот профиль при запуске Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="729"/>
      <source>Auto-reconnect</source>
      <translation>Автоматическое повторное подключение</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="732"/>
      <source>Automatically reconnect this profile if it should become disconnected for any reason other than the user disconnecting from the game server.</source>
      <translation>Автоматически переподключать этот профиль, если он должен быть отключен по любой причине, кроме отключения пользователя от игрового сервера.</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="748"/>
      <source>Password</source>
      <translation>Пароль</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="751"/>
      <source>If provided will be sent, along with the character name to identify the user in the game.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="764"/>
      <source>Enable Discord integration (not supported by game)</source>
      <translation>Включить Discord (не поддерживается игрой)</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="770"/>
      <source>Allow this profile to use Mudlet&apos;s Discord &quot;Rich Presence&quot;  features</source>
      <translation>Разрешить использование функции Mudlet Discord &quot;Rich Presence&quot;</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="876"/>
      <location filename="../src/ui/connection_profiles.ui" line="879"/>
      <source>Game description or your notes</source>
      <translation>Описание игры или ваши заметки</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="668"/>
      <source>Password:</source>
      <translation>Пароль:</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="745"/>
      <source>Characters password. Note that the password isn&apos;t encrypted in storage</source>
      <translation>Пароль персонажа. Обратите внимание, что этот пароль не зашифрован в хранении</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="710"/>
      <source>With this enabled, Mudlet will automatically start and connect on this profile when it is launched</source>
      <translation>При включении этого параметра Mudlet будет автоматически подключаться к этому профилю при запуске</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="722"/>
      <source>Open profile on Mudlet start</source>
      <translation>Загрузить профиль при старте</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="738"/>
      <source>Reconnect automatically</source>
      <translation>Переподключатся автоматически</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="767"/>
      <source>Discord integration</source>
      <translation>Интеграция с Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="805"/>
      <source>Informational</source>
      <translation>Информация</translation>
    </message>
    <message>
      <location filename="../src/ui/connection_profiles.ui" line="832"/>
      <source>Website:</source>
      <translation>Сайт:</translation>
    </message>
  </context>
  <context>
    <name>custom_line_properties</name>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="27"/>
      <source>Custom Line Properties [*]</source>
      <translation>Свойства линии [*]</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="46"/>
      <source>Line Settings:</source>
      <translation>Параметры линии:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="84"/>
      <source>Color:</source>
      <translation>Цвет:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="58"/>
      <source>Style:</source>
      <translation>Стиль:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="43"/>
      <source>&lt;p&gt;Select Style, Color and whether to end the line with an arrow head.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите стиль, цвет и следует ли заканчивать линию головкой стрелки.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="122"/>
      <source>Ends with an arrow:</source>
      <translation>Заканчивается стрелкой:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="138"/>
      <source>Exit Details:</source>
      <translation>Детали выхода:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="153"/>
      <source>Origin:</source>
      <translation>Происхождение:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="226"/>
      <source>Destination:</source>
      <translation>Назначение:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines_properties.ui" line="188"/>
      <source>    Direction/Command:</source>
      <translation>    Направление/Команда:</translation>
    </message>
  </context>
  <context>
    <name>custom_lines</name>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="14"/>
      <source>Custom Line selection</source>
      <translation>Выбор линии</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="44"/>
      <source>Choose line format, color and arrow option and then select the exit to start drawing</source>
      <translation>Выберите формат линии, цвет и стрелку, а затем выберите выход для начала рисования</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="63"/>
      <source>Line Settings:</source>
      <translation>Параметры линии:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="97"/>
      <source>Ends with an arrow:</source>
      <translation>Заканчивается стрелкой:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="110"/>
      <source>Style:</source>
      <translation>Стиль:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="126"/>
      <source>Color:</source>
      <translation>Цвет:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="47"/>
      <source>&lt;p&gt;Selecting an exit immediately proceeds to drawing the first line segment from the centre point of the room.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выбор выхода сразу же переходит к рисованию первого сегмента линии от центральной точки комнаты.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="60"/>
      <source>&lt;p&gt;Select Style, Color and whether to end the line with an arrow head BEFORE then choosing the exit to draw the line for...&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите стиль, цвет и следует ли закончить линию с головкой стрелкой ПЕРЕД выбором выхода, для которого нарисовать линию...&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="187"/>
      <source>&lt;p&gt;Select a normal exit to commence drawing a line for it, buttons are shown depressed if they already have such a custom line and disabled if there is not exit in that direction.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите нормальный выход, чтобы начать рисовать для него линию. Кнопки отображаются нажатыми, если у них уже есть такая пользовательская линия, и отключены, если нет выхода в этом направлении.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="190"/>
      <source>Normal Exits:</source>
      <translation>Выходы:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="212"/>
      <source>NW</source>
      <translation>NW</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="235"/>
      <source>N</source>
      <translation>N</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="258"/>
      <source>NE</source>
      <translation>NE</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="297"/>
      <source>UP</source>
      <translation>UP</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="336"/>
      <source>W</source>
      <translation>W</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="346"/>
      <source>E</source>
      <translation>E</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="356"/>
      <source>IN</source>
      <translation>IN</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="382"/>
      <source>OUT</source>
      <translation>OUT</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="392"/>
      <source>SW</source>
      <translation>SW</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="402"/>
      <source>S</source>
      <translation>S</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="412"/>
      <source>SE</source>
      <translation>SE</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="422"/>
      <source>DOWN</source>
      <translation>DOWN</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="444"/>
      <source>&lt;p&gt;Select a special exit to commence drawing a line for it, the first column is checked if the exit already has such a custom line.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите специальный выход, чтобы начать рисование линии
В первои столбце будет галка, если выход уже имеет такую пользовательскую линию.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="503"/>
      <source>&lt;p&gt;Indicates if there is already a custom line for this special exit, will be replaced if the exit is selected.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Указывает, что если выход выбран, какие-то пользовательские линии для этого специальньного выхода будут заменены.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="514"/>
      <source>&lt;p&gt;The room this special exit leads to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Комната куда етот специальный выход выводит.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="525"/>
      <source>&lt;p&gt;The command or LUA script that goes to the given room.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Команда или скрипт Lua, который идет к данной комнате.&lt;p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="561"/>
      <source>&lt;p&gt;To remove a custom line: cancel this dialog, select the line and right-click to obtain a &amp;quot;delete&amp;quot; option.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Чтобы удалить пользовательскую строку: отмените это диалоговое окно, выберите строку и щелкните правой кнопкой мыши, чтобы получить опцию&amp;quot;удалить&amp;quot;.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="447"/>
      <source>Special Exits:</source>
      <translation>Специальные выходы:</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="499"/>
      <source>Has
custom line?</source>
      <translation>Имеет линию?</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="511"/>
      <source> Destination </source>
      <translation> Куда </translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="522"/>
      <source> Command</source>
      <translation> Команда</translation>
    </message>
    <message>
      <location filename="../src/ui/custom_lines.ui" line="567"/>
      <source>Cancel</source>
      <translation>Отменить</translation>
    </message>
  </context>
  <context>
    <name>delete_profile_confirmation</name>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="14"/>
      <source>Confirm permanent profile deletion</source>
      <translation>Подтвердите удаление профиля</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="26"/>
      <source>Are you sure that you&apos;d like to delete this profile? Everything (aliases, triggers, backups, etc) will be gone.

If you are, please type in the profile name as a confirmation:</source>
      <translation>Вы уверены, что вы хотите удалить этот профиль? Всё (алиасы, триггеры, резервное копии и т. д.) будет удалено.

Если вы уверены, пожалуйста, введите имя профиля в качестве подтверждения:</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="54"/>
      <source>Delete</source>
      <translation>Удалить</translation>
    </message>
    <message>
      <location filename="../src/ui/delete_profile_confirmation.ui" line="61"/>
      <source>Cancel</source>
      <translation>Отменить</translation>
    </message>
  </context>
  <context>
    <name>dialog</name>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="39"/>
      <source>Status</source>
      <translation>Статус</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="44"/>
      <source>Symbol
(Set Font)</source>
      <translation>Символ
(Установить шрифт)</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="50"/>
      <source>Symbol
(All Fonts)</source>
      <translation>Символ (все шрифты)</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="56"/>
      <source>Codepoints</source>
      <translation>Коды</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="61"/>
      <source>Usage
Count</source>
      <translation>Счетчик использования</translation>
    </message>
    <message>
      <location filename="../src/ui/glyph_usage.ui" line="67"/>
      <source>Rooms</source>
      <translation>Комнаты</translation>
    </message>
  </context>
  <context>
    <name>directions</name>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13956"/>
      <source>north</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>север</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13958"/>
      <source>n</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>с</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13960"/>
      <source>east</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>восток</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13962"/>
      <source>e</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>вo</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13964"/>
      <source>south</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>юг</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13966"/>
      <source>s</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>ю</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13968"/>
      <source>west</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>запад</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13970"/>
      <source>w</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>з</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13972"/>
      <source>northeast</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>северо-восток</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13974"/>
      <source>ne</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>св</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13976"/>
      <source>southeast</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>юго-восток</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13978"/>
      <source>se</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>юв</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13980"/>
      <source>southwest</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>юго-запад</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13982"/>
      <source>sw</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>юз</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13984"/>
      <source>northwest</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>северо-запад</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13986"/>
      <source>nw</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>сз</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13988"/>
      <source>in</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>войти</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13990"/>
      <source>i</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>вт</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13992"/>
      <source>out</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>выйти</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13994"/>
      <source>o</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>вй</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13996"/>
      <source>up</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>вверх</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="13998"/>
      <source>u</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>вв</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14000"/>
      <source>down</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>вниз</translation>
    </message>
    <message>
      <location filename="../src/TLuaInterpreter.cpp" line="14002"/>
      <source>d</source>
      <comment>Entering this direction will move the player in the game</comment>
      <translation>вн</translation>
    </message>
  </context>
  <context>
    <name>dlgAboutDialog</name>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="146"/>
      <source>&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Homepage&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://www.mudlet.org/&quot;&gt;www.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Forums&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://forums.mudlet.org/&quot;&gt;forums.mudlet.org&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Documentation&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;http://wiki.mudlet.org/w/Main_Page&quot;&gt;wiki.mudlet.org/w/Main_Page&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#7289DA;&quot;&gt;&lt;b&gt;Discord&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://www.mudlet.org/chat&quot;&gt;discord.gg&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Source code&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet&quot;&gt;github.com/Mudlet/Mudlet&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;span style=&quot;color:#40b040;&quot;&gt;&lt;b&gt;Features/bugs&lt;/b&gt;&lt;/span&gt;&lt;/td&gt;&lt;td&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet/issues&quot;&gt;github.com/Mudlet/Mudlet/issues&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="155"/>
      <source>Original author, original project lead, Mudlet core coding, retired.</source>
      <comment>about:Heiko</comment>
      <translation>Оригинальный автор, оригинальный руководитель проекта, сделал ядро Mudlet, в отставке.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="158"/>
      <source>GUI design and initial feature planning. He is responsible for the project homepage and the user manual. Maintainer of the Windows, macOS, Ubuntu and generic Linux installers. Maintains the Mudlet wiki, Lua API, and handles project management, public relations &amp;amp; user help. With the project from the very beginning and is an official spokesman of the project. Since the retirement of Heiko, he has become the head of the Mudlet project.</source>
      <comment>about:Vadi</comment>
      <translation>Дизайн графического интерфейса и первоначальное планирование функций. Он отвечает за домашнюю страницу проекта и руководство пользователя. Мейнтейнер инсталляторов Windows, macOS, Ubuntu и общих Linux. Поддерживает Mudlet wiki, Lua API, и обрабатывает управление проектами, связи с общественностью &amp; помощь пользователей. С самого начала работы над проектом и является официальным представителем проекта. После ухода на пенсию Хайко стал руководителем проекта Mudlet.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="165"/>
      <source>After joining in 2013, he has been poking various bits of the C++ code and GUI with a pointy stick; subsequently trying to patch over some of the holes made/found. Most recently he has been working on I18n and L10n for Mudlet 4.0.0 so if you are playing Mudlet in a language other than American English you will be seeing the results of him getting fed up with the spelling differences between what was being used and the British English his brain wanted to see.</source>
      <comment>about:SlySven</comment>
      <translation>После присоединения в 2013 году он тыкает различные биты кода C ++ и графического интерфейса с острой палкой; впоследствии пытается залатать некоторые из дыр, сделанных или найденных. Совсем недавно он работал над I18n и L10n для Mudlet 4.0.0 так что если вы играете в Mudlet на языке, отличном от американского английского, вы увидите результаты его устали от различий в написании между тем, что было использовано, и британским английским его мозг хотел видеть.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="172"/>
      <source>Former maintainer of the early Windows and Apple OSX packages. He also administers our server and helps the project in many ways.</source>
      <comment>about:demonnic</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="176"/>
      <source>Contributed many improvements to Mudlet&apos;s db: interface, event system, and has been around the project for a very long while assisting users.</source>
      <comment>about:keneanung</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="180"/>
      <source>Does a ton of work in making Mudlet, the website and the wiki accessible to you regardless of the language you speak - and promoting our genre!</source>
      <comment>about:Leris</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="184"/>
      <source>Contributions to the Travis integration, CMake and Visual C++ build, a lot of code quality and memory management improvements.</source>
      <comment>about:ahmedcharles</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="188"/>
      <source>Developed a shared module system that allows script packages to be shared among profiles, a UI for viewing Lua variables, improvements in the mapper and all around.</source>
      <comment>about:Chris7</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="192"/>
      <source>Developed the first version of our Mac OSX installer. He is the former maintainer of the Mac version of Mudlet.</source>
      <comment>about:Ben Carlsen</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="196"/>
      <source>Joined in December 2009 though he&apos;s been around much longer. Contributed to the Lua API and is the former maintainer of the Lua API.</source>
      <comment>about:Ben Smith</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="200"/>
      <source>Joined in December 2009. He has contributed to the Lua API, submitted small bugfix patches and has helped with release management of 1.0.5.</source>
      <comment>about:Blaine von Roeder</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="204"/>
      <source>Developed the original cmake build script and he has committed a number of patches.</source>
      <comment>about:Bruno Bigras</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="207"/>
      <source>Contributed to the Lua API.</source>
      <comment>about:Carter Dewey</comment>
      <translation>Внес свой вклад в Lua API.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="210"/>
      <source>Developed the Vyzor GUI Manager for Mudlet.</source>
      <comment>about:Oneymus</comment>
      <translation>Разработан менеджер графического интерфейса Vyzor для Mudlet.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="213"/>
      <source>Worked wonders in rejuvenating our Website in 2017 but who prefers a little anonymity - if you are a &lt;i&gt;SpamBot&lt;/i&gt; you will not get onto our Fora now. They have also made some useful C++ core code contributions and we look forward to future reviews on and work in that area.</source>
      <comment>about:TheFae</comment>
      <translation>Сотворил чудеса в омоложении нашего сайта в 2017 году, но кто предпочитает немного анонимности - если вы &lt;i&gt;SpamBot&lt;/i&gt; , вы не попадете на наши форумы сейчас. Они также внесли некоторые полезные вклады в основной код C++, и мы с нетерпением ждем будущих обзоров и работы в этой области.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="218"/>
      <source>Joining us 2017 they have given us some useful C++ and Lua contributions.</source>
      <comment>about:Dicene</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="221"/>
      <source>Contributed the Geyser layout manager for Mudlet in March 2010. It is written in Lua and aims at simplifying user GUI scripting.</source>
      <comment>about:James Younquist</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="225"/>
      <source>Helped develop and debug the Lua API.</source>
      <comment>about:John Dahlström</comment>
      <translation>Помогал разрабатывать и отлаживать Lua API.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="228"/>
      <source>Contributed several improvements and new features for Geyser.</source>
      <comment>about:Beliaar</comment>
      <translation>Внесли несколько улучшений и новых функций для Гейзер.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="231"/>
      <source>The original author of our Windows installer.</source>
      <comment>about:Leigh Stillard</comment>
      <translation>Оригинальный автор нашего инсталлятора для Windows.</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="234"/>
      <source>Worked on the manual, forum help and helps with GUI design and documentation.</source>
      <comment>about:Maksym Grinenko</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="237"/>
      <source>Developed a database Lua API that allows for far easier use of databases and one of the original OSX installers.</source>
      <comment>about:Stephen Hansen</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="240"/>
      <source>Designed our beautiful logo, our splash screen, the about dialog, our website, several icons and badges. Visit his homepage at &lt;a href=&quot;http://thorwil.wordpress.com/&quot;&gt;thorwil.wordpress.com&lt;/a&gt;.</source>
      <comment>about:Thorsten Wilms</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="249"/>
      <source>&lt;p&gt;Others too, have make their mark on different aspects of the Mudlet project and if they have not been mentioned here it is by no means intentional! For past contributors you may see them mentioned in the &lt;b&gt;&lt;a href=&quot;https://launchpad.net/~mudlet-makers/+members#active&quot;&gt;Mudlet Makers&lt;/a&gt;&lt;/b&gt; list (on our former bug-tracking site), or for on-going contributors they may well be included in the &lt;b&gt;&lt;a href=&quot;https://github.com/Mudlet/Mudlet/graphs/contributors&quot;&gt;Contributors&lt;/a&gt;&lt;/b&gt; list on GitHub.&lt;/p&gt;
&lt;br&gt;
&lt;p&gt;Many icons are taken from the &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;&lt;u&gt;KDE4 oxygen icon theme&lt;/u&gt;&lt;/b&gt;&lt;/span&gt; at &lt;a href=&quot;https://web.archive.org/web/20130921230632/http://www.oxygen-icons.org/&quot;&gt;www.oxygen-icons.org &lt;sup&gt;{wayback machine archive}&lt;/sup&gt;&lt;/a&gt; or &lt;a href=&quot;http://www.kde.org&quot;&gt;www.kde.org&lt;/a&gt;.  Most of the rest are from Thorsten Wilms, or from Stephen Lyons combining bits of Thorsten&apos;s work with the other sources.&lt;/p&gt;
&lt;p&gt;Special thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Brett Duzevich&lt;/b&gt;&lt;/span&gt; and &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Ronny Ho&lt;/b&gt;&lt;/span&gt;. They have contributed many good ideas and thus helped improve the scripting framework substantially.&lt;/p&gt;
&lt;p&gt;Thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Tomas Mecir&lt;/b&gt;&lt;/span&gt; (&lt;span style=&quot;color:#0000ff;&quot;&gt;kmuddy@kmuddy.com&lt;/span&gt;) who brought us all together and inspired us with his KMuddy project. Mudlet is using some of the telnet code he wrote for his KMuddy project (&lt;a href=&quot;https://cgit.kde.org/kmuddy.git/&quot;&gt;cgit.kde.org/kmuddy.git/&lt;/a&gt;).&lt;/p&gt;
&lt;p&gt;Special thanks to &lt;span style=&quot;color:#bc8942;&quot;&gt;&lt;b&gt;Nick Gammon&lt;/b&gt;&lt;/span&gt; (&lt;a href=&quot;http://www.gammon.com.au/mushclient/mushclient.htm&quot;&gt;www.gammon.com.au/mushclient/mushclient.htm&lt;/a&gt;) for giving us some valued pieces of advice.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="294"/>
      <source>&lt;p&gt;Mudlet was originally written by Heiko Köhn, KoehnHeiko@googlemail.com.&lt;/p&gt;
&lt;p&gt;Mudlet is released under the GPL license version 2, which is reproduced below:&lt;/p&gt;</source>
      <comment>For non-english language versions please append a translation of the following to explain why the GPL is NOT reproduced in the relevent language: &apos;but only the English form is considered the official version of the license, so the following is reproduced in that language:&apos; to replace &apos;which is reproduced below:&apos;...</comment>
      <translation>&lt;p&gt;Mudlet был первоначально написан Хейко Кёном, KoehnHeiko@googlemail.com.&lt;/p&gt;
&lt;p&gt;Mudlet выпущен под лицензией GPL версии 2, которая воспроизводится ниже:&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="590"/>
      <source>&lt;p align=&quot;center&quot;&gt;&lt;b&gt;Mudlet&lt;/b&gt; is built upon the shoulders of other projects in the FOSS world; as well as using many GPL components we also make use of some third-party software with other licenses:&lt;/p&gt;</source>
      <translation>&lt;p align=&quot;center&quot;&gt;&lt;b&gt;Mudlet&lt;/b&gt; построен на плечах других проектов в мире FOSS, а также с использованием многих GPL компонентов мы также используем некоторые сторонние программы с другими лицензиями:&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="832"/>
      <source>&lt;h2&gt;&lt;u&gt;Communi IRC Library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008-2020 The Communi Project&lt;/h3&gt;</source>
      <translation>&lt;bh2&gt;&lt;bu&gt;Библиотека IRC Communi&lt;b/u&gt;&lt;b/h2&gt;&lt;bh3&gt;Авторское право © 2008-2020 Проект Communi&lt;b/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="835"/>
      <source>&lt;p&gt;Parts of &lt;tt&gt;irctextformat.cpp&lt;/t&gt; code come from Konversation and are copyrighted to:&lt;br&gt;Copyright © 2002 Dario Abatianni &amp;lt;eisfuchs@tigress.com&amp;gt;&lt;br&gt;Copyright © 2004 Peter Simonsson &amp;lt;psn@linux.se&amp;gt;&lt;br&gt;Copyright © 2006-2008 Eike Hein &amp;lt;hein@kde.org&amp;gt;&lt;br&gt;Copyright © 2004-2009 Eli Mackenzie &amp;lt;argonel@gmail.com&amp;gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Части &lt;tt&gt;irctextformat.cpp&lt;/t&gt; кода исходят от Konversation и защищены авторским правом на:&lt;br&gt;Авторское право © 2002 Дарио Абатьянни &amp;lt;eisfuchs@tigress.com&amp;gt;&lt;br&gt;Авторское право © 2004 Питер Симонссон &amp;lt;psn@linux.se&amp;gt;&lt;br&gt;Авторское право © 2006-2008 Эйке Хайн &amp;lt;hein@kde.org&amp;gt;&lt;br&gt;Авторское право © 2004-2009 Эли Маккензи &amp;lt;argonel@gmail.com&amp;gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="841"/>
      <source>&lt;h2&gt;&lt;u&gt;lua - Lua 5.1&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1994–2017 Lua.org, PUC-Rio.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;lua - Lua 5.1&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Авторское право © 1994 — 2017 Lua.org, PUC-Rio.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="844"/>
      <source>&lt;h2&gt;&lt;u&gt;lua_yajl - Lua 5.1 interface to yajl&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Brian Maher &amp;lt;maherb at brimworks dot com&amp;gt;&lt;br&gt;Copyright © 2009 Brian Maher&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;lua_yajl - Lua 5.1 интерфейс для yajl&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Автор: Брайан Маер &amp;lt;maherb at brimworks dot com&amp;gt;&lt;br&gt;Авторское право © 2009 Брайан Маер&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="849"/>
      <source>&lt;h2&gt;&lt;u&gt;LuaZip - Reading files inside zip files&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Author: Danilo Tuler&lt;br&gt;Copyright © 2003-2007 Kepler Project&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;LuaZip - чтение файлов внутри zip-файлов&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;автор: Данило Tuler&lt;br&gt;Авторское право © 2003-2007 Кеплер проекта&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="854"/>
      <source>&lt;h2&gt;&lt;u&gt;edbee - multi-feature editor widget&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2012-2014 by Reliable Bits Software by Blommers IT&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;edbee многофункциональный редактор&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;авторские права © 2012-2014 от Reliable Bits Software от Blommers IT&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="857"/>
      <source>The &lt;b&gt;edbee-lib&lt;/b&gt; widget itself incorporates other components with licences that must be noted as well, they are:</source>
      <translation>&lt;b&gt;edbe-lib&lt;/b&gt; сам по себе включает в себя другие компоненты с лицензиями, которые также должны быть отмечены:</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="859"/>
      <source>&lt;h2&gt;&lt;u&gt;Onigmo (Oniguruma-mod) LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;Copyright © 2011-2014 K.Takata &amp;lt;kentkt AT csc DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Onigmo (Oniguruma-мод) лицензия&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;Copyright © 2011-2014 K.Takata &amp;lt;kentkt AT csc DOT jp&amp;gt;&lt;br&gt;Все права защищены.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="864"/>
      <source>&lt;h2&gt;&lt;u&gt;Oniguruma LICENSE&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2002-2009 K.Kosako &amp;lt;sndgk393 AT ybb DOT ne DOT jp&amp;gt;&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Онигурума ЛИЦЕНЗИЯ&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Авторское право © 2002-2009 К.Косако sndgk393 AT Ybb DOT ne DOT JP&lt;br&gt;Все права защищены.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="868"/>
      <source>&lt;h2&gt;&lt;u&gt;Ruby BSDL&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 1993-2013 Yukihiro Matsumoto.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Ruby BSDL&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Авторское право © 1993-2013 Юкихиро Мацумото.&lt;br&gt;Все права защищены.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="872"/>
      <source>&lt;h2&gt;&lt;u&gt;Qt-Components, QsLog&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;(&lt;span style=&quot;color:red&quot;&gt;&lt;u&gt;https://bitbucket.org/razvapetru/qt-components [broken link]&lt;/u&gt;&lt;/span&gt;&lt;/h3&gt;&lt;small&gt;&lt;a href=&quot;https://web.archive.org/web/20131220072148/https://bitbucket.org/razvanpetru/qt-components&quot;&gt; {&amp;quot;Wayback Machine&amp;quot; archived version}&lt;/a&gt;&lt;/small&gt;)&lt;br&gt;Copyright © 2013, Razvan Petru&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Qt-компоненты, QsLog&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;(&lt;span style=&quot;color:red&quot;&gt;&lt;u&gt;https://bitbucket.org/razvapetru/qt-components [сломанная ссылка]&lt;/u&gt;&lt;/span&gt;&lt;/h3&gt;&lt;small&gt;&lt;a href=&quot;https://web.archive.org/web/20131220072148/https://bitbucket.org/razvanpetru/qt-components&quot;&gt; {&amp;quot;архивная версия Wayback Wayback&amp;quot;}&lt;/a&gt;&lt;/small&gt;)&lt;br&gt;Авторское право © 2013, Разван Петру&lt;br&gt;Все права защищены.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="879"/>
      <source>&lt;h2&gt;&lt;u&gt;dblsqd&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Philipp Medien&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;dblsqd&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Авторское право © 2017 Филипп Медиен&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="882"/>
      <source>&lt;h2&gt;&lt;u&gt;Sparkle - macOS updater&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2006-2013 Andy Matuschak.&lt;br&gt;Copyright © 2009-2013 Elgato Systems GmbH.&lt;br&gt;Copyright © 2011-2014 Kornel Lesiński.&lt;br&gt;Copyright © 2015-2017 Mayur Pawashe.&lt;br&gt;Copyright © 2014 C.W. Betts.&lt;br&gt;Copyright © 2014 Petroules Corporation.&lt;br&gt;Copyright © 2014 Big Nerd Ranch.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="892"/>
      <source>&lt;h4&gt;bspatch.c and bsdiff.c, from bsdiff 4.3 &lt;a href=&quot;http://www.daemonology.net/bsdiff/&quot;&gt;http://www.daemonology.net/bsdiff&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2003-2005 Colin Percival.&lt;/h3&gt;&lt;h4&gt;sais.c and sais.c, from sais-lite (2010/08/07) &lt;a href=&quot;https://sites.google.com/site/yuta256/sais&quot;&gt;https://sites.google.com/site/yuta256/sais&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2008-2010 Yuta Mori.&lt;/h3&gt;&lt;h4&gt;SUDSAVerifier.m:&lt;/h4&gt;&lt;h3&gt;Copyright © 2011 Mark Hamlin.&lt;br&gt;All rights reserved.&lt;/h3&gt;</source>
      <translation>&lt;h4&gt;bspatch.c and bsdiff.c, from bsdiff 4.3 &lt;a href=&quot;http://www.daemonology.net/bsdiff/&quot;&gt;http://www.daemonology.net/bsdiff&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2003-2005 Colin Percival.&lt;/h3&gt;&lt;h4&gt;sais.c and sais.c, from sais-lite (2010/08/07) &lt;a href=&quot;https://sites.google.com/site/yuta256/sais&quot;&gt;https://sites.google.com/site/yuta256/sais&lt;/a&gt;:&lt;/h4&gt;&lt;h3&gt;Copyright © 2008-2010 Yuta Mori.&lt;/h3&gt;&lt;h4&gt;SUDSAVerifier.m:&lt;/h4&gt;&lt;h3&gt;Copyright © 2011 Mark Hamlin.&lt;br&gt;Все права защищены.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="900"/>
      <source>&lt;h2&gt;&lt;u&gt;sparkle-glue&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2008 Remko Troncon&lt;br&gt;Copyright © 2017 Vadim Peretokin&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;sparkle-glue&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Авторское право © 2008 Ремко Тронкон&lt;br&gt;Авторское право © 2017 Вадим Перетокин&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="906"/>
      <source>&lt;h2&gt;&lt;u&gt;Discord - Rich Presence - RPC library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Discord, Inc.&lt;/h3&gt;</source>
      <translation>&lt;h2&gt;&lt;u&gt;Discord - Rich Presence - RPC library&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2017 Discord, Inc.&lt;/h3&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="909"/>
      <source>&lt;h2&gt;&lt;u&gt;QtKeyChain - Platform-independent Qt API for storing passwords securely&lt;/u&gt;&lt;/h2&gt;&lt;h3&gt;Copyright © 2011-2019 Frank Osterfeld &amp;lt;frank.osterfeld@gmail.com&amp;gt;.&lt;/h3&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1057"/>
      <source>
                          These formidable folks will be fondly remembered forever&lt;br&gt;for their generous financial support on &lt;a href=&quot;https://www.patreon.com/mudlet&quot;&gt;Mudlet&apos;s patreon&lt;/a&gt;:
                          </source>
      <translation>
                          Эти люди навсегда останутся в памяти&lt;br&gt;за их щедрую финансовую поддержку &lt;a href=&quot;https://www.patreon.com/mudlet&quot;&gt;Mudlet&apos;s patureon&lt;/a&gt;:
                          </translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1068"/>
      <source>Technical information:</source>
      <translation>Техническая информация:</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1069"/>
      <source>Version</source>
      <translation>Версия</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1070"/>
      <source>OS</source>
      <translation>ОС</translation>
    </message>
    <message>
      <location filename="../src/dlgAboutDialog.cpp" line="1071"/>
      <source>CPU</source>
      <translation>Процессор</translation>
    </message>
  </context>
  <context>
    <name>dlgColorTrigger</name>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="52"/>
      <source>More colors</source>
      <translation>Больше цветов</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="54"/>
      <source>Click to access all 256 ANSI colors.</source>
      <translation>Нажмите, чтобы получить доступ ко всем 256 ANSI цветов.</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="59"/>
      <source>&lt;p&gt;Click to make the color trigger ignore the text&apos;s background color - however choosing this for both foreground and background is an error.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите, чтобы заставить цветовой триггер игнорировать текст цвета фона - однако выбор этого параметра как для переднего плана, так и для фона является ошибкой.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="60"/>
      <source>&lt;p&gt;Click to make the color trigger ignore the text&apos;s foreground color - however choosing this for both foreground and background is an error.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите, чтобы заставить цветовой триггер игнорировать текст цвета переднего плана - однако выбор этого цвета как для переднего плана, так и для фона является ошибкой.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="64"/>
      <source>Default</source>
      <translation>По умолчанию</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="66"/>
      <source>&lt;p&gt;Click to make the color trigger when the text&apos;s background color has not been modified from its normal value.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите, чтобы сделать триггер цвета, если цвет фона текста не был изменен по сравнению с нормальным значением.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="67"/>
      <source>&lt;p&gt;Click to make the color trigger when the text&apos;s foreground color has not been modified from its normal value.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите, чтобы сделать триггер цвета, если цвет переднего плана текста не был изменен по сравнению с нормальным значением.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="71"/>
      <source>&lt;p&gt;Click a color to make the trigger fire only when the text&apos;s background color matches the color number indicated.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите цвет, чтобы активировать триггер, только когда цвет фона совпадает с указанным цветом.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="72"/>
      <source>&lt;p&gt;Click a color to make the trigger fire only when the text&apos;s foreground color matches the color number indicated.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите цвет, чтобы активировать триггер, только когда цвет текста совпадает с указанным цветом.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="77"/>
      <source>Black</source>
      <translation>Чёрный</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="78"/>
      <source>Red</source>
      <translation>Красный</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="79"/>
      <source>Green</source>
      <translation>Зеленый</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="80"/>
      <source>Yellow</source>
      <translation>Желтый</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="81"/>
      <source>Blue</source>
      <translation>Синий</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="82"/>
      <source>Magenta</source>
      <translation>Пурпурный</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="83"/>
      <source>Cyan</source>
      <translation>Голубой</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="84"/>
      <source>White (Light gray)</source>
      <translation>Белый (светло-серый)</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="86"/>
      <source>Light black (Dark gray)</source>
      <translation>Светло-черный (темно-серый)</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="87"/>
      <source>Light red</source>
      <translation>Светло-красный</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="88"/>
      <source>Light green</source>
      <translation>Светло-зеленый</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="89"/>
      <source>Light yellow</source>
      <translation>Светло-желтый</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="90"/>
      <source>Light blue</source>
      <translation>Светло-голубой</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="91"/>
      <source>Light magenta</source>
      <translation>Светло-пурпурный</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="92"/>
      <source>Light cyan</source>
      <translation>Светло-голубой</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="93"/>
      <source>Light white</source>
      <translation>Светло-белый</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="218"/>
      <source>%1 [%2]</source>
      <comment>Color Trigger dialog button in basic 16-color set, the first value is the name of the color, the second is the ANSI color number - for most languages modification is not likely to be needed - this text is used in two places</comment>
      <translation>%1 [%2]</translation>
    </message>
    <message>
      <location filename="../src/dlgColorTrigger.cpp" line="405"/>
      <source>All color options are showing.</source>
      <translation>Все цветовые опции показаны.</translation>
    </message>
  </context>
  <context>
    <name>dlgConnectionProfiles</name>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="110"/>
      <source>Connect</source>
      <translation>Подключиться</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="267"/>
      <source>Game name: %1</source>
      <translation>Название игры: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1239"/>
      <source>This profile is currently loaded - close it before changing the connection parameters.</source>
      <translation>Данный профиль загружен - закройте его перед изменением параметров подключения.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2050"/>
      <source>The %1 character is not permitted. Use one of the following:</source>
      <translation>Символ %1 не допускается. Используйте один из следующих:</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2080"/>
      <source>You have to enter a number. Other characters are not permitted.</source>
      <translation>Вам нужно ввести номер. Другие символы не допускаются.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2066"/>
      <source>This profile name is already in use.</source>
      <translation>Профиль с таким названием уже существует.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="523"/>
      <source>Could not rename your profile data on the computer.</source>
      <translation>Не смог переименовать профиль на диске.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="122"/>
      <source>&lt;p&gt;&lt;center&gt;&lt;big&gt;&lt;b&gt;Welcome to Mudlet!&lt;/b&gt;&lt;/big&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;&lt;center&gt;&lt;b&gt;Click on one of the games on the list to play.&lt;/b&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;To play a game not in the list, click on %1 &lt;span style=&quot; color:#555753;&quot;&gt;New&lt;/span&gt;, fill in the &lt;i&gt;Profile Name&lt;/i&gt;, &lt;i&gt;Server address&lt;/i&gt;, and &lt;i&gt;Port&lt;/i&gt; fields in the &lt;i&gt;Required &lt;/i&gt; area.&lt;/p&gt;&lt;p&gt;After that, click %2 &lt;span style=&quot; color:#555753;&quot;&gt;Connect&lt;/span&gt; to play.&lt;/p&gt;&lt;p&gt;Have fun!&lt;/p&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans&apos;;&quot;&gt;The Mudlet Team &lt;/span&gt;&lt;img src=&quot;:/icons/mudlet_main_16px.png&quot;/&gt;&lt;/p&gt;</source>
      <comment>Welcome message. Both %1 and %2 may be replaced by icons when this text is used.</comment>
      <translation>&lt;p&gt;&lt;center&gt;&lt;big&gt;&lt;b&gt;Добро пожаловать в Мудлет!&lt;/b&gt;&lt;/big&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;&lt;center&gt;&lt;b&gt;Нажмите на одну из игр в списке, чтобы играть.&lt;/b&gt;&lt;/center&gt;&lt;/p&gt;&lt;p&gt;Чтобы играть в игру которая не в списке, нажмите на %1 &lt;span style=&quot; color:#555753;&quot;&gt;Новый&lt;/span&gt;, заполните &lt;i&gt;Имя профиля&lt;/i&gt;, &lt;i&gt;Адрес сервера&lt;/i&gt;и &lt;i&gt;Порт&lt;/i&gt; поля в &lt;i&gt;Обязательной &lt;/i&gt; области.&lt;/p&gt;&lt;p&gt;После этого нажмите кнопку %2 &lt;span style=&quot; color:#555753;&quot;&gt;Подключится&lt;/span&gt; чтобы играть.&lt;/p&gt;&lt;p&gt;Удачи!&lt;/p&gt;&lt;p align=&quot;right&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans&apos;;&quot;&gt;Команда Мадлет &lt;/span&gt;&lt;img src=&quot;:/icons/mudlet_main_16px.png&quot;/&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="112"/>
      <source>Offline</source>
      <translation>Оффлайн</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="135"/>
      <source>Copy</source>
      <translation>Скопировать</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="137"/>
      <source>Copy settings only</source>
      <translation>Копировать только настройки</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="145"/>
      <source>copy profile</source>
      <translation>скопировать профиль</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="146"/>
      <source>copy the entire profile to new one that will require a different new name.</source>
      <translation>скопировать весь профиль в новый, который потребует другого нового имени.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="150"/>
      <source>copy profile settings</source>
      <translation>копировать настройки профиля</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="151"/>
      <source>copy the settings and some other parts of the profile to a new one that will require a different new name.</source>
      <translation>скопировать настройки и некоторые другие части профиля на новый, который потребует другого нового имени.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="215"/>
      <source>Characters password, stored securely in the computer&apos;s credential manager</source>
      <translation>Пароль персонажа, сохранен в компьютере с учетным менеджером</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="217"/>
      <source>Characters password. Note that the password isn&apos;t encrypted in storage</source>
      <translation>Пароль персонажа. Обратите внимание, что этот пароль не зашифрован в хранении</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="264"/>
      <source>Click to load but not connect the selected profile.</source>
      <translation>Нажмите, чтобы загрузить, но не подключать выбранный профиль.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="265"/>
      <source>Click to load and connect the selected profile.</source>
      <translation>Нажмите, чтобы загрузить и подключить выбранный профиль.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="266"/>
      <source>Need to have a valid profile name, game server address and port before this button can be enabled.</source>
      <translation>Необходимо иметь корректное имя профиля, адрес сервера игры и порт перед включением.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="268"/>
      <source>Button to select a mud game to play, double-click it to connect and start playing it.</source>
      <comment>Some text to speech engines will spell out initials like MUD so stick to lower case if that is a better option</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="531"/>
      <source>Could not create the new profile folder on your computer.</source>
      <translation>Не смог создать новую папку профиля на компьютере.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="567"/>
      <source>new profile name</source>
      <translation>Введите имя нового профиля</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="680"/>
      <source>Deleting &apos;%1&apos;</source>
      <translation>Удаление &apos;%1&apos;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1286"/>
      <source>Discord integration not available on this platform</source>
      <translation>Интеграция Discord не доступна на этой платформе</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1292"/>
      <source>Discord integration not supported by game</source>
      <translation>Интеграция Discord не поддерживается игрой</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1295"/>
      <source>Check to enable Discord integration</source>
      <translation>Включить интеграцию с Discord</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1651"/>
      <source>Reset icon</source>
      <comment>Reset the custom picture for this profile in the connection dialog and show the default one instead</comment>
      <translation>Сбросить значок</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1653"/>
      <source>Set custom icon</source>
      <comment>Set a custom picture to show for the profile in the connection dialog</comment>
      <translation>Установить значок</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1663"/>
      <source>Select custom image for profile (should be 120x30)</source>
      <translation>Выберите пользовательское изображение для профиля (должно быть 120x30)</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="1665"/>
      <source>Images (%1)</source>
      <translation>Изображения (%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2093"/>
      <source>Port number must be above zero and below 65535.</source>
      <translation>Номер порта должен быть выше нуля и ниже 65535.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2119"/>
      <source>Mudlet can not load support for secure connections.</source>
      <translation>Mudlet не может загрузить поддержку защищенных соединений.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2143"/>
      <source>Please enter the URL or IP address of the Game server.</source>
      <translation>Пожалуйста, введите URL-адрес или IP-адрес игрового сервера.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2156"/>
      <source>SSL connections require the URL of the Game server.</source>
      <translation>SSL-соединения требуют URL сервера игры.</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2174"/>
      <source>&lt;p&gt;Load profile without connecting.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Загрузить профиль без подключения.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2190"/>
      <source>&lt;p&gt;Please set a valid profile name, game server address and the game port before loading.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Пожалуйста, установите правильное имя профиля, адрес игрового сервера и игровой порт перед загрузкой.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2195"/>
      <source>&lt;p&gt;Please set a valid profile name, game server address and the game port before connecting.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Пожалуйста, установите правильное имя профиля, адрес игрового сервера и игровой порт перед подключением.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2248"/>
      <source>&lt;p&gt;Click to hide the password; it will also hide if another profile is selected.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите, чтобы скрыть пароль; он также будет скрыт, если выбран другой профиль.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2252"/>
      <source>&lt;p&gt;Click to reveal the password for this profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите, чтобы открыть пароль для этого профиля.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2101"/>
      <location filename="../src/dlgConnectionProfiles.cpp" line="2107"/>
      <source>Mudlet is not configured for secure connections.</source>
      <translation>Mudlet не настроен на защищенные соединения.</translation>
    </message>
  </context>
  <context>
    <name>dlgIRC</name>
    <message>
      <location filename="../src/dlgIRC.cpp" line="119"/>
      <source>%1 closed their client.</source>
      <translation>%1 закрыл их клиент.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="131"/>
      <source>Mudlet IRC Client - %1 - %2 on %3</source>
      <translation>Mudlet IRC-клиент - %1 - %2 на %3</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="145"/>
      <source>$ Starting Mudlet IRC Client...</source>
      <translation>$ Загружается Mudlet IRC-клиент...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="146"/>
      <source>$ Host: %1:%2</source>
      <translation>$ Хост: %1:%2</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="147"/>
      <source>$ Nick: %1</source>
      <translation>$ Ник: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="148"/>
      <source>$ Auto-Join Channels: %1</source>
      <translation>$ Авто-присоединяться к каналам: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="149"/>
      <source>$ This client supports Auto-Completion using the Tab key.</source>
      <translation>$ Этот клиент поддерживает автозавершения при помощи клавиши Tab.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="150"/>
      <source>$ Type &lt;b&gt;/help&lt;/b&gt; for commands or &lt;b&gt;/help [command]&lt;/b&gt; for command syntax.</source>
      <translation>$ Введите &lt;b&gt;/help&lt;/b&gt; для команд или &lt;b&gt;/help [command]&lt;/b&gt; для синтаксиса команд.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="209"/>
      <source>Restarting IRC Client</source>
      <translation>Перезапуск клиента IRC</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="382"/>
      <source>[Error] MSGLIMIT requires &lt;limit&gt; to be a whole number greater than zero!</source>
      <translation>[Error] MSGLIMIT требует &lt;limit&gt;, чтобы быть целым числом больше нуля!</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="412"/>
      <source>[HELP] Available Commands: %1</source>
      <translation>[HELP] Доступные команды: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="414"/>
      <source>[HELP] Syntax: %1</source>
      <translation>Синтаксис [HELP]: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="422"/>
      <source>! Connected to %1.</source>
      <translation>! Связь с %1 установлена.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="423"/>
      <source>! Joining %1...</source>
      <translation>! Вступление %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="428"/>
      <source>! Connecting %1...</source>
      <translation>! Установка связи с %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="433"/>
      <source>! Disconnected from %1.</source>
      <translation>! Отключен от %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="499"/>
      <source>[ERROR] Syntax: %1</source>
      <translation>[ОШИБКА] %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="501"/>
      <source>[ERROR] Unknown command: %1</source>
      <translation>[OШИБКА] Неизвестная команда: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="647"/>
      <source>! The Nickname %1 is reserved. Automatically changing Nickname to: %2</source>
      <translation>! Прозвище %1 зарезервирован. Автоматически меняется ник на: %2</translation>
    </message>
    <message>
      <location filename="../src/dlgIRC.cpp" line="658"/>
      <source>Your nick has changed.</source>
      <translation>Ваш ник был изменён.</translation>
    </message>
  </context>
  <context>
    <name>dlgMapper</name>
    <message>
      <location filename="../src/dlgMapper.cpp" line="347"/>
      <source>None</source>
      <comment>Don&apos;t show the map overlay, &apos;none&apos; meaning no map overlay styled are enabled</comment>
      <translation>Ничего</translation>
    </message>
  </context>
  <context>
    <name>dlgModuleManager</name>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="48"/>
      <source>Module Manager - %1</source>
      <translation>Менеджер модулей - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Module Name</source>
      <translation>Имя модуля</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Priority</source>
      <translation>Приоритет</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Sync</source>
      <translation>Синхр.</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="66"/>
      <source>Module Location</source>
      <translation>Расположение модуля</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="105"/>
      <source>Checking this box will cause the module to be saved and &lt;i&gt;resynchronised&lt;/i&gt; across all sessions that share it when the &lt;i&gt;Save Profile&lt;/i&gt; button is clicked in the Editor or if it is saved at the end of the session.</source>
      <translation>Установка этого флажка приведет к тому, что модуль будет сохранен и &lt;bi&gt;будет ресинхронизирован&lt;b/i&gt; во всех сеансах, которые совместно используют его, когда кнопка &lt;bi&gt;Сохранить профиль&lt;b/i&gt; нажата в редакторе или когда профиль будет сохранен в конце сеанса.</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="111"/>
      <source>&lt;b&gt;Note:&lt;/b&gt; &lt;i&gt;.zip&lt;/i&gt; and &lt;i&gt;.mpackage&lt;/i&gt; modules are currently unable to be synced&lt;br&gt; only &lt;i&gt;.xml&lt;/i&gt; packages are able to be synchronized across profiles at the moment. </source>
      <translation>&lt;b&gt;Примечание:&lt;/b&gt; &lt;i&gt;.zip&lt;/i&gt; и &lt;i&gt;.mpackage&lt;/i&gt; модули в настоящее время не могут быть синхронизированы&lt;br&gt; только &lt;i&gt;.xml&lt;/i&gt; пакеты в данный момент могут быть синхронизированы между профилями. </translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="149"/>
      <source>Load Mudlet Module</source>
      <translation>Загрузить Mudlet модуль</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="156"/>
      <source>Load Mudlet Module:</source>
      <translation>Загрузить Mudlet Модуль:</translation>
    </message>
    <message>
      <location filename="../src/dlgModuleManager.cpp" line="156"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>Файл не может бытс прочитан %1:
%2.</translation>
    </message>
  </context>
  <context>
    <name>dlgPackageExporter</name>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="20"/>
      <source>Package Exporter</source>
      <translation>Экспортер пакетов</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="28"/>
      <source>Package name here</source>
      <translation>Имя пакета</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="35"/>
      <source>or</source>
      <translation>или</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="58"/>
      <location filename="../src/dlgPackageExporter.cpp" line="1374"/>
      <source>Select what to export</source>
      <translation>Выберите что экспортировать</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="68"/>
      <source>Check items to export</source>
      <translation>Выберите элементы для экспорта</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="95"/>
      <source>(optional) add icon, description, and more</source>
      <translation>(опционально) добавить иконку, описание и многое другое</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="118"/>
      <source>Author</source>
      <translation>Автор</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="137"/>
      <location filename="../src/ui/dlgPackageExporter.ui" line="213"/>
      <location filename="../src/ui/dlgPackageExporter.ui" line="250"/>
      <source>optional</source>
      <translation>дополнительно</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="159"/>
      <location filename="../src/ui/dlgPackageExporter.ui" line="181"/>
      <source>Icon size of 512x512 recommended</source>
      <translation>Рекомендуемый размер значка 512x512</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="191"/>
      <source>512x512 recommended</source>
      <translation>512x512 рекомендовано</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="233"/>
      <source>optional. Markdown supported, and you can add images with drag and drop</source>
      <translation>необязательно. Markdown поддерживается, и вы можете добавлять изображения с помощью перетаскивания</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="144"/>
      <source>Icon</source>
      <translation>Иконка</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="162"/>
      <source>Add icon</source>
      <translation>Добавить иконку</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="200"/>
      <source>Short description</source>
      <translation>Краткое описание</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="220"/>
      <source>Description</source>
      <translation>Описание</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="240"/>
      <source>Version</source>
      <translation>Версия</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="257"/>
      <source>Does this package make use of other packages? List them here as requirements</source>
      <translation>Использует ли этот пакет другие пакеты? Перечислите их здесь в качестве требований</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="260"/>
      <source>Required packages</source>
      <translation>Требуемые пакеты</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="317"/>
      <source>Include assets (images, sounds, fonts)</source>
      <translation>Добавить ресурсы (изображения, звуки, шрифты)</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="333"/>
      <source>Drag and drop files and folders, or use the browse button below</source>
      <translation>Перетащите файлы и папки, или используйте кнопку "Обзор" ниже</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="371"/>
      <source>Select files to include in package</source>
      <translation>Выберите файлы для включения в пакет</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="304"/>
      <source>Does this package make use of other packages? List them here as requirements. Press &apos;Delete&apos; to remove a package</source>
      <translation>Использует ли этот пакет другие пакеты? Перечислите их здесь в качестве требований. Нажмите &apos;Удалить&apos; для удаления пакета</translation>
    </message>
    <message>
      <location filename="../src/ui/dlgPackageExporter.ui" line="414"/>
      <source>Select export location</source>
      <translation>Куда записать результат</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="63"/>
      <source>Triggers</source>
      <translation>Триггеры</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="64"/>
      <source>Aliases</source>
      <translation>Алиасы</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="65"/>
      <source>Timers</source>
      <translation>Таймеры</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="66"/>
      <source>Scripts</source>
      <translation>Скрипты</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="67"/>
      <source>Keys</source>
      <translation>Ключи</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="68"/>
      <source>Buttons</source>
      <translation>Кнопки</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="88"/>
      <source>Export</source>
      <comment>Text for button to perform the package export on the items the user has selected.</comment>
      <translation>Экспорт</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="109"/>
      <source>update installed package</source>
      <translation>обновить установленный пакет</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="110"/>
      <source>add dependencies</source>
      <translation>добавить зависимости</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="155"/>
      <source>Failed to open file &quot;%1&quot; to place into package. Error message was: &quot;%2&quot;.</source>
      <comment>This error message will appear when a file is to be placed into the package but the code cannot open it.</comment>
      <translation>Не удалось открыть файл &quot;%1&quot;, чтобы поместить его в пакет. Сообщение об ошибке: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="165"/>
      <source>Failed to add file &quot;%1&quot; to package. Error message was: &quot;%3&quot;.</source>
      <comment>This error message will appear when a file is to be placed into the package but cannot be done for some reason.</comment>
      <translation>Не удалось добавить файл &quot;%1&quot; в пакет. Сообщение об ошибке: &quot;%3&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="311"/>
      <location filename="../src/dlgPackageExporter.cpp" line="313"/>
      <source>Export to %1</source>
      <translation>Экспорт в %1</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="982"/>
      <source>Failed to zip up the package. Error is: &quot;%1&quot;.</source>
      <comment>This error message is displayed at the final stage of exporting a package when all the sourced files are finally put into the archive. Unfortunately this may be the point at which something breaks because a problem was not spotted/detected in the process earlier...</comment>
      <translation>Не удалось заархивировать пакет. Ошибка: &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="333"/>
      <source>Open Icon</source>
      <translation>Открыть иконку</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="333"/>
      <source>Image Files (*.png *.jpg *.jpeg *.bmp *.tif *.ico *.icns)</source>
      <translation>Файлы изображений (*.png *.jpg *.jpeg *.bmp *.tif *.ico *.icns)</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="456"/>
      <source>Please enter the package name.</source>
      <translation>Пожалуйста, введите имя пакета.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="486"/>
      <location filename="../src/dlgPackageExporter.cpp" line="591"/>
      <source>Exporting package...</source>
      <translation>Экспорт пакета...</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="536"/>
      <source>Failed to export. Could not open the folder &quot;%1&quot; for writing. Do you have the necessary permissions and free disk-space to write to that folder?</source>
      <translation>Не удалось экспортировать. Не удалось открыть папку &quot;%1&quot; для записи. У вас есть необходимые разрешения и свободное дисковое пространство для записи в эту папку?</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="795"/>
      <source>%1 doesn&apos;t seem to exist anymore - can you double-check it?</source>
      <translation>%1 больше не существует, можете ли вы проверить это?</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="730"/>
      <source>Failed to export. Could not write Mudlet items to the file &quot;%1&quot;.</source>
      <comment>This error message is shown when all the Mudlet items cannot be written to the &apos;packageName&apos;.xml file in the base directory of the place where all the files are staged before being compressed into the package file. The full path and filename are shown in %1 to help the user diagnose what might have happened.</comment>
      <translation>Не удалось экспортировать. Не удалось записать элементы Mudlet в файл &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="907"/>
      <source>Failed to add directory &quot;%1&quot; to package. Error is: &quot;%2&quot;.</source>
      <translation>Не удалось добавить папку &quot;%1&quot; в пакет. Ошибка: &quot;%2&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="950"/>
      <source>Required file &quot;%1&quot; was not found in the staging area. This area contains the Mudlet items chosen for the package, which you selected to be included in the package file. This suggests there may be a problem with that directory: &quot;%2&quot; - Do you have the necessary permissions and free disk-space?</source>
      <translation>Необходимый файл &quot;%1&quot; не найден в области стажировки. В этой области есть элементы Mudlet, выбранные для пакета, которые вы выбрали для включения в пакет. Это предполагает, что с этой директорией может возникнуть проблема: &quot;%2&quot; - Есть ли у вас необходимые разрешения и свободное место на диске?</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="577"/>
      <source>Package &quot;%1&quot; exported to: %2</source>
      <translation>Пакет &quot;%1&quot; экспортирован в: %2</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="829"/>
      <source>Failed to open package file. Error is: &quot;%1&quot;.</source>
      <comment>This zipError message is shown when the libzip library code is unable to open the file that was to be the end result of the export process. As this may be an existing file anywhere in the computer&apos;s file-system(s) it is possible that permissions on the directory or an existing file that is to be overwritten may be a source of problems here.</comment>
      <translation>Не удалось открыть файл пакета. Ошибка: &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="979"/>
      <source>Export cancelled.</source>
      <translation>Экспорт отменен.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="1356"/>
      <source>Why not &lt;a href=&quot;https://forums.mudlet.org/viewforum.php?f=6&quot;&gt;upload&lt;/a&gt; your package for other Mudlet users?</source>
      <comment>Only the text outside of the &apos;a&apos; (HTML anchor) tags PLUS the verb &apos;upload&apos; in between them in the source text, (associated with uploading the resulting package to the Mudlet forums) should be translated.</comment>
      <translation>Почему бы не &lt;a href=&quot;https://forums.mudlet.org/viewforum.php?f=6&quot;&gt;загрузить&lt;/a&gt; свой пакет другим пользователям Mudlet?</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/dlgPackageExporter.cpp" line="1376"/>
      <source>Select what to export (%1 items)</source>
      <comment>Package exporter selection</comment>
      <translation>
        <numerusform>Выберите, что экспортировать (%1 элемент)</numerusform>
        <numerusform>Выберите, что экспортировать (%1 элементов)</numerusform>
        <numerusform>Выберите, что экспортировать (%1 элементов)</numerusform>
        <numerusform>Выберите, что экспортировать (%1 элементов)</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/dlgPackageExporter.cpp" line="1040"/>
      <source>Where do you want to save the package?</source>
      <translation>Где вы хотите сохранить пакет?</translation>
    </message>
  </context>
  <context>
    <name>dlgPackageManager</name>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="50"/>
      <source>Package Manager - %1</source>
      <translation>Менеджер пакетов - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="104"/>
      <source>Import Mudlet Package</source>
      <translation>Импортировать пакет</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="111"/>
      <source>Import Mudlet Package:</source>
      <translation>Импортировать пакет:</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="111"/>
      <source>Cannot read file %1:
%2.</source>
      <translation>Файл не может бытс прочитан %1:
%2.</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="175"/>
      <source>Author</source>
      <translation>Автор</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="175"/>
      <source>Version</source>
      <translation>Версия</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="175"/>
      <source>Created</source>
      <translation>Создан</translation>
    </message>
    <message>
      <location filename="../src/dlgPackageManager.cpp" line="175"/>
      <source>Dependencies</source>
      <translation>Зависимости</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/dlgPackageManager.cpp" line="246"/>
      <source>Remove packages</source>
      <comment>Button in package manager to remove selected package(s)</comment>
      <translation>
        <numerusform>Удалить пакет</numerusform>
        <numerusform>Удалить пакеты</numerusform>
        <numerusform>Удалить пакеты</numerusform>
        <numerusform>Удалить пакеты</numerusform>
      </translation>
    </message>
  </context>
  <context>
    <name>dlgProfilePreferences</name>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="142"/>
      <source>&lt;p&gt;Location which will be used to store log files - matching logs will be appended to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Местоположение, которое будет использоваться для хранения лог-файлов - соответствующие логи будут присоедины.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="150"/>
      <source>logfile</source>
      <comment>Must be a valid default filename for a log-file and is used if the user does not enter any other value (Ensure all instances have the same translation {1 of 2}).</comment>
      <translation>журнал</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="202"/>
      <source>&lt;p&gt;Select the only or the primary font used (depending on &lt;i&gt;Only use symbols (glyphs) from chosen font&lt;/i&gt; setting) to produce the 2D mapper room symbols.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="217"/>
      <source>&lt;p&gt;Some East Asian MUDs may use glyphs (characters) that Unicode classifies as being of &lt;i&gt;Ambiguous&lt;/i&gt; width when drawn in a font with a so-called &lt;i&gt;fixed&lt;/i&gt; pitch; in fact such text is &lt;i&gt;duo-spaced&lt;/i&gt; when not using a proportional font. These symbols can be drawn using either a half or the whole space of a full character. By default Mudlet tries to chose the right width automatically but you can override the setting for each profile.&lt;/p&gt;&lt;p&gt;This control has three settings:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Unchecked&lt;/b&gt; &apos;&lt;i&gt;narrow&lt;/i&gt;&apos; = Draw ambiguous width characters in a single &apos;space&apos;.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Checked&lt;/b&gt; &apos;&lt;i&gt;wide&lt;/i&gt;&apos; = Draw ambiguous width characters two &apos;spaces&apos; wide.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Partly checked&lt;/b&gt; &lt;i&gt;(Default) &apos;auto&apos;&lt;/i&gt; = Use &apos;wide&apos; setting for MUD Server encodings of &lt;b&gt;Big5&lt;/b&gt;, &lt;b&gt;GBK&lt;/b&gt; or &lt;b&gt;GBK18030&lt;/b&gt; and &apos;narrow&apos; for all others.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;This is a temporary arrangement and will probably change when Mudlet gains full support for languages other than English.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="236"/>
      <source>&lt;p&gt;Some Desktop Environments tell Qt applications like Mudlet whether they should shown icons on menus, others, however do not. This control allows the user to override the setting, if needed, as follows:&lt;ul&gt;&lt;li&gt;&lt;b&gt;Unchecked&lt;/b&gt; &apos;&lt;i&gt;off&lt;/i&gt;&apos; = Prevent menus from being drawn with icons.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Checked&lt;/b&gt; &apos;&lt;i&gt;on&lt;/i&gt;&apos; = Allow menus to be drawn with icons.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Partly checked&lt;/b&gt; &lt;i&gt;(Default) &apos;auto&apos;&lt;/i&gt; = Use the setting that the system provides.&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;This setting is only processed when individual menus are created and changes may not propogate everywhere until Mudlet is restarted.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="293"/>
      <source>%1 (%2% done)</source>
      <comment>%1 is the (not-translated so users of the language can read it!) language name, %2 is percentage done.</comment>
      <translation>%1 (%2% готово)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="346"/>
      <source>Migrated all passwords to secure storage.</source>
      <translation>Все пароли были перенесены в безопасное хранение.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="353"/>
      <source>Migrated %1...</source>
      <comment>This notifies the user that progress is being made on profile migration by saying what profile was just migrated to store passwords securely</comment>
      <translation>Перенесен %1...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="357"/>
      <source>Migrated all passwords to profile storage.</source>
      <translation>Все пароли были перенесены в безопасное хранение.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="738"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00%1)</source>
      <translation>yyyy-MM-dd#HH-mm-ss (например, 1970-01-01#00-00-00%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="740"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00%1)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (например, 1970-01-01T00-00-00%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="741"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01%1)</source>
      <translation>yyyy-MM-dd (объединять ежедневные журналы, например 1970-01-01%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="744"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01%1)</source>
      <translation>yyyy-MM (объединять ежемесячные журналы, например 1970-01%1)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="745"/>
      <source>Named file (concatenate logs in one file)</source>
      <translation>Именованный файл (объединение журналов в один файл)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="778"/>
      <source>Other profiles to Map to:</source>
      <translation>Другие профили куда карту скопировать:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="818"/>
      <source>%1 {Default, recommended}</source>
      <translation>%1 {Default, recommended}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="829"/>
      <source>%1 {Upgraded, experimental/testing, NOT recommended}</source>
      <translation>%1 {модернизированный, экспериментальный, не рекомендуется}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="831"/>
      <source>%1 {Downgraded, for sharing with older version users, NOT recommended}</source>
      <translation>%1 {Старее, для предоставления доступа пользователям более старых версий, НЕ рекомендуется}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="840"/>
      <source>2D Map Room Symbol scaling factor:</source>
      <translation>Коэффициент масштабирования обозначений комнат на 2D карте:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="860"/>
      <source>Show &quot;%1&quot; in the map area selection</source>
      <translation>Показать &quot;%1&quot; в выборе области карты</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="898"/>
      <source>%1 (*Error, report to Mudlet Makers*)</source>
      <comment>The encoder code name is not in the mudlet class mEncodingNamesMap when it should be and the Mudlet Makers need to fix it!</comment>
      <translation>%1 (*Ошибка, сообщите Mudlet Makers*)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="1012"/>
      <location filename="../src/dlgProfilePreferences.cpp" line="3770"/>
      <source>Profile preferences - %1</source>
      <translation>Настройки профиля - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="1288"/>
      <source>Profile preferences</source>
      <translation>Настройки профиля</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2007"/>
      <source>Load Mudlet map</source>
      <translation>Загрузить Mudlet карту</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2022"/>
      <source>Importing map - please wait...</source>
      <translation>Импорт карты - подождите...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2026"/>
      <source>Imported map from %1.</source>
      <translation>Карта загруженна из %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2028"/>
      <source>Could not import map from %1.</source>
      <translation>Не удалось импортировать карту из %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2031"/>
      <source>Loading map - please wait...</source>
      <translation>Загрузка карты - пожалуйста, подождите...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2036"/>
      <source>Loaded map from %1.</source>
      <translation>Карта загруженна из %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2038"/>
      <source>Could not load map from %1.</source>
      <translation>Не удалось загрузить карту с %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2055"/>
      <source>Save Mudlet map</source>
      <translation>Сохранить Mudlet карту</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2055"/>
      <source>Mudlet map (*.dat)</source>
      <comment>Do not change the extension text (in braces) - it is needed programmatically!</comment>
      <translation>Mudlet карта (*.dat)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2065"/>
      <source>Saving map - please wait...</source>
      <translation>Карта сохраняется, ждите...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2075"/>
      <source>Saved map to %1.</source>
      <translation>Карта сохраненна в %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2077"/>
      <source>Could not save map to %1.</source>
      <translation>Невозможно сохранить карту в %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2105"/>
      <source>Migrating passwords to secure storage...</source>
      <translation>Перенос паролей в безопасное хранилище...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2112"/>
      <source>Migrating passwords to profiles...</source>
      <translation>Перенос паролей в профили...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2144"/>
      <source>[ ERROR ] - Unable to use or create directory to store map for other profile &quot;%1&quot;.
Please check that you have permissions/access to:
&quot;%2&quot;
and there is enough space. The copying operation has failed.</source>
      <translation>[ ОШИБКА ] - не удалось использовать или создать папку для сохранения карты для другого профиля &quot;%1&quot;.
Пожалуйста, проверьте, что у вас есть права/доступ к:
&quot;%2&quot;
и есть достаточно места. Операция копирования не удалась.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2151"/>
      <source>Creating a destination directory failed...</source>
      <translation>Создание директории завершено неудачно...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2235"/>
      <source>Backing up current map - please wait...</source>
      <translation>Резервное копирование текущей карты - пожалуйста, подождите...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2245"/>
      <source>Could not backup the map - saving it failed.</source>
      <translation>Не удалось создать резервную копию карты - сохранение не выполнено.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2270"/>
      <source>Could not copy the map - failed to work out which map file we just saved the map as!</source>
      <translation>Не удалось скопировать карту - не удалось выяснить, в файл мы только что сохранили карту!</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2282"/>
      <source>Copying over map to %1 - please wait...</source>
      <translation>Карта копируется в %1 - пожалуйста, подождите...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2288"/>
      <source>Could not copy the map to %1 - unable to copy the new map file over.</source>
      <translation>Не удалось скопировать карту в %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2292"/>
      <source>Map copied successfully to other profile %1.</source>
      <translation>Карта успешно скопирована в другой профиль %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2304"/>
      <source>Map copied, now signalling other profiles to reload it.</source>
      <translation>Карта скопирована, теперь сигнализироваем другим профилям, чтобы перезагрузить ее.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2340"/>
      <source>Where should Mudlet save log files?</source>
      <translation>Где Mudlet сохранять лог-файлы?</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2725"/>
      <source>%1 selected - press to change</source>
      <translation>%1 выбран - нажмите для изменения</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2728"/>
      <source>Press to pick destination(s)</source>
      <translation>Выбрать пункт назначения(с)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2969"/>
      <source>Could not update themes: %1</source>
      <translation>Не удалось обновить темы: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2972"/>
      <source>Updating themes from colorsublime.github.io...</source>
      <translation>Обновление тем от colorsublime.github.io...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3089"/>
      <source>{missing, possibly recently deleted trigger item}</source>
      <translation>{не существует, триггер может быть был удалён}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3092"/>
      <source>{missing, possibly recently deleted alias item}</source>
      <translation>{не существует, алиас может быть был удалён}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3095"/>
      <source>{missing, possibly recently deleted script item}</source>
      <translation>{не существует, скрипт может быть был удалён}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3098"/>
      <source>{missing, possibly recently deleted timer item}</source>
      <translation>{не существует, таймер может быть был удалён}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3101"/>
      <source>{missing, possibly recently deleted key item}</source>
      <translation>{не существует, ключ может быть был удалён}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3104"/>
      <source>{missing, possibly recently deleted button item}</source>
      <translation>{не существует, кнопка может быть была удалена}</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3229"/>
      <source>&lt;p&gt;The room symbol will appear like this if only symbols (glyphs) from the specific font are used.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Символ комнаты будет выглядеть так, если используются только символы (глифы) из шрифта.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3902"/>
      <source>Set outer color of player room mark.</source>
      <translation>Задать внешний цвет метки комнаты игрока.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3903"/>
      <source>Set inner color of player room mark.</source>
      <translation>Задать внутренний цвет метки комнаты игрока.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="204"/>
      <source>&lt;p&gt;Using a single font is likely to produce a more consistent style but may cause the &lt;i&gt;font replacement character&lt;/i&gt; &apos;&lt;b&gt;�&lt;/b&gt;&apos; to show if the font does not have a needed glyph (a font&apos;s individual character/symbol) to represent the grapheme (what is to be represented).  Clearing this checkbox will allow the best alternative glyph from another font to be used to draw that grapheme.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="143"/>
      <source>&lt;p&gt;Select a directory where logs will be saved.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите папку, в которую будут сохранены журналы.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="144"/>
      <source>&lt;p&gt;Reset the directory so that logs are saved to the profile&apos;s &lt;i&gt;log&lt;/i&gt; directory.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Сбросить опцию, чтобы журналы сохранялись в папке профиля &lt;i&gt;log&lt;/i&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="145"/>
      <source>&lt;p&gt;This option sets the format of the log name.&lt;/p&gt;&lt;p&gt;If &lt;i&gt;Named file&lt;/i&gt; is selected, you can set a custom file name. (Logs are appended if a log file of the same name already exists.)&lt;/p&gt;</source>
      <translation>&lt;p&gt;Этот параметр задает формат имени журнала.&lt;/p&gt;&lt;p&gt;Если выбран &lt;i&gt;Именованный файл&lt;/i&gt;, вы можете установить произвольное имя файла. (Логи прилагаются, если файл журнала с таким же именем уже существует.)&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="148"/>
      <source>&lt;p&gt;Set a custom name for your log. (New logs are appended if a log file of the same name already exists).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите имя для вашего журнала. (Новые журналы добавляются, если файл журнала уже существует).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="169"/>
      <source>&lt;p&gt;Automatic updates are disabled in development builds to prevent an update from overwriting your Mudlet.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Автоматическое обновление отключено в сборках разработки, чтобы предотвратить обновления от перезаписовать ваш Mudlet.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="190"/>
      <source>&lt;p&gt;A timer with a short interval will quickly fill up the &lt;i&gt;Central Debug Console&lt;/i&gt; windows with messages that it ran correctly on &lt;i&gt;each&lt;/i&gt; occasion it is called.  This (per profile) control adjusts a threshold that will hide those messages in just that window for those timers which run &lt;b&gt;correctly&lt;/b&gt; when the timer&apos;s interval is less than this setting.&lt;/p&gt;&lt;p&gt;&lt;u&gt;Any timer script that has errors will still have its error messages reported whatever the setting.&lt;/u&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="196"/>
      <source>&lt;p&gt;This will bring up a display showing all the symbols used in the current map and whether they can be drawn using just the specified font, any other font, or not at all.  It also shows the sequence of Unicode &lt;i&gt;code-points&lt;/i&gt; that make up that symbol, so that they can be identified even if they cannot be displayed; also, up to the first thirty two rooms that are using that symbol are listed, which may help to identify any unexpected or odd cases.&lt;p&gt;</source>
      <translation>&lt;p&gt;Это покажет дисплей показывающий все символы, используемые на текущей карте, и могут ли они быть нарисованы только с помощью определенного шрифта, любого другого шрифта, или нет вообще.  Он также показывает последовательность Unicode &lt;i&gt;кодов&lt;/i&gt; которые составляют этот символ, так что они могут быть идентифицированы, даже если они не могут быть отображены. Кроме того, первые тридцать две комнат использующих этот символ перечислены, что может помочь определить любые неожиданные или странные случаи.&lt;p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="209"/>
      <source>&lt;p&gt;If &lt;b&gt;not&lt;/b&gt; checked Mudlet will only react to the first matching keybinding (combination of key and modifiers) even if more than one of them is set to be active. This means that a temporary keybinding (not visible in the Editor) created by a script or package may be used in preference to a permanent one that is shown and is set to be active. If checked then all matching keybindings will be run.&lt;/p&gt;&lt;p&gt;&lt;i&gt;It is recommended to not enable this option if you need to maintain compatibility with scripts or packages for Mudlet versions prior to &lt;b&gt;3.9.0&lt;/b&gt;.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="229"/>
      <source>&lt;p&gt;Enable a context (right click) menu action on any console/user window that, when the mouse cursor is hovered over it, will display the UTF-16 and UTF-8 items that make up each Unicode codepoint on the &lt;b&gt;first&lt;/b&gt; line of any selection.&lt;/p&gt;&lt;p&gt;This utility feature is intended to help the user identify any grapheme (visual equivalent to a &lt;i&gt;character&lt;/i&gt;) that a Game server may send even if it is composed of multiple bytes as any non-ASCII character will be in the Lua sub-system which uses the UTF-8 encoding system.&lt;p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="571"/>
      <source>Mudlet dictionaries:</source>
      <comment>On Windows and MacOs, we have to bundle our own dictionaries with our application - and we also use them on *nix systems where we do not find the system ones.</comment>
      <translation>Словари Mudlet:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="573"/>
      <source>System dictionaries:</source>
      <comment>On *nix systems where we find the system ones we use them.</comment>
      <translation>Системные словари:</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="604"/>
      <source>&lt;p&gt;From the dictionary file &lt;tt&gt;%1.dic&lt;/tt&gt; (and its companion affix &lt;tt&gt;.aff&lt;/tt&gt; file).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Из файла словаря &lt;tt&gt;%1.dic&lt;/tt&gt; (и его сопутствующий файл &lt;tt&gt;.aff&lt;/tt&gt;).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="606"/>
      <source>%1 - not recognised</source>
      <translation>%1 - не распознан</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="607"/>
      <source>&lt;p&gt;Mudlet does not recognise the code &quot;%1&quot;, please report it to the Mudlet developers so we can describe it properly in future Mudlet versions!&lt;/p&gt;&lt;p&gt;The file &lt;tt&gt;%2.dic&lt;/tt&gt; (and its companion affix &lt;tt&gt;.aff&lt;/tt&gt; file) is still usable.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mudlet не распознает код &quot;%1&quot;, сообщите об этом разработчикам Mudlet, чтобы мы могли правильно описать его в будущих версиях Mudlet!&lt;/p&gt;&lt;p&gt;Файл &lt;tt&gt;%2.dic&lt;/tt&gt; (и сопровождающий его файл &lt;tt&gt;.aff&lt;/tt&gt;) по-прежнему используем.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="632"/>
      <source>No Hunspell dictionary files found, spell-checking will not be available.</source>
      <translation>Файлы словаря Hunspell не найдены, проверка орфографии будет недоступна.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="2009"/>
      <source>Mudlet map (*.dat);;Xml map data (*.xml);;Any file (*)</source>
      <comment>Do not change extensions (in braces) as they are used programmatically</comment>
      <translation>Mudlet карта (*.dat); Карта Xml-данные (*.xml); Любой файл (*)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3235"/>
      <source>&lt;p&gt;The room symbol will appear like this if symbols (glyphs) from any font can be used.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Символ комнаты будет выглядеть так, если можно использовать символы (глифы) любого шрифта.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3264"/>
      <source>&lt;p&gt;These are the sequence of hexadecimal numbers that are used by the Unicode consortium to identify the graphemes needed to create the symbol.  These numbers can be utilised to determine precisely what is to be drawn even if some fonts have glyphs that are the same for different codepoints or combination of codepoints.&lt;/p&gt;&lt;p&gt;Character entry utilities such as &lt;i&gt;charmap.exe&lt;/i&gt; on &lt;i&gt;Windows&lt;/i&gt; or &lt;i&gt;gucharmap&lt;/i&gt; on many Unix type operating systems will also use these numbers which cover everything from U+0020 {Space} to U+10FFFD the last usable number in the &lt;i&gt;Private Use Plane 16&lt;/i&gt; via most of the written marks that humanity has ever made.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3277"/>
      <source>&lt;p&gt;How many rooms in the whole map have this symbol.</source>
      <translation>&lt;p&gt;Сколько комнат на всей карте имеют этот символ.</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3289"/>
      <source>more - not shown...</source>
      <translation>больше - не показали...</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3296"/>
      <source>&lt;p&gt;The rooms with this symbol, up to a maximum of thirty-two, if there are more than this, it is indicated but they are not shown.&lt;/p&gt;</source>
      <translation>&lt;p&gt; Комнаты с этим символом, максимум до тридцати двух, если их больше, они указаны, но не показаны.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3305"/>
      <source>&lt;p&gt;The symbol can be made entirely from glyphs in the specified font.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Символ может быть выполнен полностью из глифов указанного шрифта.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3315"/>
      <source>&lt;p&gt;The symbol cannot be made entirely from glyphs in the specified font, but, using other fonts in the system, it can. Either un-check the &lt;i&gt;Only use symbols (glyphs) from chosen font&lt;/i&gt; option or try and choose another font that does have the needed glyphs.&lt;/p&gt;&lt;p&gt;&lt;i&gt;You need not close this table to try another font, changing it on the main preferences dialogue will update this table after a slight delay.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3325"/>
      <source>&lt;p&gt;The symbol cannot be drawn using any of the fonts in the system, either an invalid string was entered as the symbol for the indicated rooms or the map was created on a different systems with a different set of fonts available to use. You may be able to correct this by installing an additional font using whatever method is appropriate for this system or by editing the map to use a different symbol. It may be possible to do the latter via a lua script using the &lt;i&gt;getRoomChar&lt;/i&gt; and &lt;i&gt;setRoomChar&lt;/i&gt; functions.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3414"/>
      <source>Large icon</source>
      <comment>Discord Rich Presence large icon</comment>
      <translation>Большой значок</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3415"/>
      <source>Detail</source>
      <comment>Discord Rich Presence detail</comment>
      <translation>Деталь</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3417"/>
      <source>Small icon</source>
      <comment>Discord Rich Presence small icon</comment>
      <translation>Маленький значок</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3418"/>
      <source>State</source>
      <comment>Discord Rich Presence state</comment>
      <translation>Состояние</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3420"/>
      <source>Party size</source>
      <comment>Discord Rich Presence party size</comment>
      <translation>Размер группы</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3421"/>
      <source>Party max</source>
      <comment>Discord Rich Presence maximum party size</comment>
      <translation>Макс. размер группы</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3422"/>
      <source>Time</source>
      <comment>Discord Rich Presence time until or time elapsed</comment>
      <translation>Время</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3457"/>
      <source>Map symbol usage - %1</source>
      <translation>Символы использованные в карте - %1</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3534"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00.html)</source>
      <translation>yyyy-MM-dd#HH-mm-ss (например, 1970-01-01#00-00-00.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3535"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00.html)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (например, 1970-01-01T00-00-00.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3536"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01.html)</source>
      <translation>гггг-ММ-дд (объединять ежедневные журналы, например, 1970-01-01.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3537"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01.html)</source>
      <translation>yyyy-MM (объединять ежемесячные журналы, например 1970-01.html)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3540"/>
      <source>yyyy-MM-dd#HH-mm-ss (e.g., 1970-01-01#00-00-00.txt)</source>
      <translation>yyyy-MM-dd#HH-mm-ss (например, 1970-01-01#00-00-00.txt)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3541"/>
      <source>yyyy-MM-ddTHH-mm-ss (e.g., 1970-01-01T00-00-00.txt)</source>
      <translation>yyyy-MM-ddTHH-mm-ss (например, 1970-01-01T00-00-00.txt)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3542"/>
      <source>yyyy-MM-dd (concatenate daily logs in, e.g. 1970-01-01.txt)</source>
      <translation>yyyy-MM-dd (объединять ежедневные журналы, например 1970-01-01.txt)</translation>
    </message>
    <message>
      <location filename="../src/dlgProfilePreferences.cpp" line="3543"/>
      <source>yyyy-MM (concatenate month logs in, e.g. 1970-01.txt)</source>
      <translation>yyyy-MM (объединять ежемесячные журналы, например 1970-01.txt)</translation>
    </message>
  </context>
  <context>
    <name>dlgRoomExits</name>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="145"/>
      <location filename="../src/dlgRoomExits.cpp" line="150"/>
      <location filename="../src/dlgRoomExits.cpp" line="736"/>
      <location filename="../src/dlgRoomExits.cpp" line="741"/>
      <location filename="../src/dlgRoomExits.cpp" line="789"/>
      <location filename="../src/dlgRoomExits.cpp" line="794"/>
      <location filename="../src/dlgRoomExits.cpp" line="838"/>
      <location filename="../src/dlgRoomExits.cpp" line="843"/>
      <location filename="../src/dlgRoomExits.cpp" line="887"/>
      <location filename="../src/dlgRoomExits.cpp" line="892"/>
      <location filename="../src/dlgRoomExits.cpp" line="936"/>
      <location filename="../src/dlgRoomExits.cpp" line="941"/>
      <location filename="../src/dlgRoomExits.cpp" line="985"/>
      <location filename="../src/dlgRoomExits.cpp" line="990"/>
      <location filename="../src/dlgRoomExits.cpp" line="1034"/>
      <location filename="../src/dlgRoomExits.cpp" line="1039"/>
      <location filename="../src/dlgRoomExits.cpp" line="1083"/>
      <location filename="../src/dlgRoomExits.cpp" line="1088"/>
      <location filename="../src/dlgRoomExits.cpp" line="1132"/>
      <location filename="../src/dlgRoomExits.cpp" line="1137"/>
      <location filename="../src/dlgRoomExits.cpp" line="1181"/>
      <location filename="../src/dlgRoomExits.cpp" line="1186"/>
      <location filename="../src/dlgRoomExits.cpp" line="1230"/>
      <location filename="../src/dlgRoomExits.cpp" line="1235"/>
      <location filename="../src/dlgRoomExits.cpp" line="1279"/>
      <location filename="../src/dlgRoomExits.cpp" line="1284"/>
      <location filename="../src/dlgRoomExits.cpp" line="1753"/>
      <location filename="../src/dlgRoomExits.cpp" line="1758"/>
      <location filename="../src/dlgRoomExits.cpp" line="1863"/>
      <location filename="../src/dlgRoomExits.cpp" line="1868"/>
      <source>&lt;b&gt;Room&lt;/b&gt; Weight of destination: %1.</source>
      <comment>Bold HTML tags are used to emphasis that the value is destination room&apos;s weight whether overridden by a non-zero exit weight here or not.</comment>
      <translation>&lt;b&gt;Room&lt;/b&gt; Вес назначения: %1.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="149"/>
      <location filename="../src/dlgRoomExits.cpp" line="740"/>
      <location filename="../src/dlgRoomExits.cpp" line="793"/>
      <location filename="../src/dlgRoomExits.cpp" line="842"/>
      <location filename="../src/dlgRoomExits.cpp" line="891"/>
      <location filename="../src/dlgRoomExits.cpp" line="940"/>
      <location filename="../src/dlgRoomExits.cpp" line="989"/>
      <location filename="../src/dlgRoomExits.cpp" line="1038"/>
      <location filename="../src/dlgRoomExits.cpp" line="1087"/>
      <location filename="../src/dlgRoomExits.cpp" line="1136"/>
      <location filename="../src/dlgRoomExits.cpp" line="1185"/>
      <location filename="../src/dlgRoomExits.cpp" line="1234"/>
      <location filename="../src/dlgRoomExits.cpp" line="1283"/>
      <location filename="../src/dlgRoomExits.cpp" line="1757"/>
      <location filename="../src/dlgRoomExits.cpp" line="1867"/>
      <source>Exit to unnamed room is valid</source>
      <translation>Выход в комнату без названия действителен</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="156"/>
      <source>Entered number is invalid, set the number of the room that this special exit leads to, will turn blue for a valid number; if left like this, this exit will be deleted when &amp;lt;i&amp;gt;save&amp;lt;/i&amp;gt; is clicked.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="218"/>
      <source>Set the number of the room that this special exit leads to, will turn blue for a valid number; if left like this, this exit will be deleted when &amp;lt;i&amp;gt;save&amp;lt;/i&amp;gt; is clicked.</source>
      <translation>Установите номер комнаты, к которой ведет этот специальный выход, станет синим для действительного номера; если он останется таким образом, этот выход будет удален, когда &amp;lt; i&amp;gt;сохранить&amp;lt; / i&amp;gt; будет нажат.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="221"/>
      <location filename="../src/dlgRoomExits.cpp" line="1886"/>
      <source>Prevent a route being created via this exit, equivalent to an infinite exit weight.</source>
      <translation>Предотвратить создание маршрута через этот выход, эквивалентный бесконечному весу выхода.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="225"/>
      <location filename="../src/dlgRoomExits.cpp" line="1895"/>
      <source>Set to a positive value to override the default (Room) Weight for using this Exit route, zero value assigns the default.</source>
      <translation>Задайте положительное значение, чтобы переопределить значение по умолчанию (Room) для использования этого маршрута выхода, нулевое значение назначает значение по умолчанию.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="227"/>
      <location filename="../src/dlgRoomExits.cpp" line="1902"/>
      <source>No door symbol is drawn on 2D Map for this exit (only functional choice currently).</source>
      <translation>В двухмерной карте для данного выхода не отображается символ дверцы (в настоящее время доступен только функциональный выбор).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="229"/>
      <location filename="../src/dlgRoomExits.cpp" line="1906"/>
      <source>Green (Open) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>Зеленая (открытая) дверь будет нарисована на пользовательской линии выхода для этого выхода на 2D карте (но не в данный момент).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="231"/>
      <location filename="../src/dlgRoomExits.cpp" line="1911"/>
      <source>Orange (Closed) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>Оранжевый (закрытый) символ двери будет нарисан на пользовательской линии выхода для данного выхода на двухмерной карте (но не в данный момент).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="233"/>
      <location filename="../src/dlgRoomExits.cpp" line="1914"/>
      <source>Red (Locked) door symbol would be drawn on a custom exit line for this exit on 2D Map (but not currently).</source>
      <translation>Красный (заблокированный) символ двери будет нарисован на пользовательской линии выхода для данного выхода на двухмерной карте (но не в данный момент).</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="93"/>
      <location filename="../src/dlgRoomExits.cpp" line="216"/>
      <source>(room ID)</source>
      <comment>Placeholder, if no room ID is set for an exit, yet. This string is used in 2 places, ensure they match!</comment>
      <translation>(номер комнаты)</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="133"/>
      <location filename="../src/dlgRoomExits.cpp" line="234"/>
      <location filename="../src/dlgRoomExits.cpp" line="269"/>
      <location filename="../src/dlgRoomExits.cpp" line="2269"/>
      <location filename="../src/dlgRoomExits.cpp" line="2291"/>
      <source>(command or Lua script)</source>
      <comment>Placeholder, if a special exit has no code given, yet. This string is also used programmatically - ensure all five instances are the same</comment>
      <translation>(команда или скрипт Луа)</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="144"/>
      <location filename="../src/dlgRoomExits.cpp" line="735"/>
      <location filename="../src/dlgRoomExits.cpp" line="788"/>
      <location filename="../src/dlgRoomExits.cpp" line="837"/>
      <location filename="../src/dlgRoomExits.cpp" line="886"/>
      <location filename="../src/dlgRoomExits.cpp" line="935"/>
      <location filename="../src/dlgRoomExits.cpp" line="984"/>
      <location filename="../src/dlgRoomExits.cpp" line="1033"/>
      <location filename="../src/dlgRoomExits.cpp" line="1082"/>
      <location filename="../src/dlgRoomExits.cpp" line="1131"/>
      <location filename="../src/dlgRoomExits.cpp" line="1180"/>
      <location filename="../src/dlgRoomExits.cpp" line="1229"/>
      <location filename="../src/dlgRoomExits.cpp" line="1278"/>
      <location filename="../src/dlgRoomExits.cpp" line="1752"/>
      <location filename="../src/dlgRoomExits.cpp" line="1862"/>
      <source>Exit to &quot;%1&quot;.</source>
      <translation>Выход в &quot;%1&quot;.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="749"/>
      <source>Entered number is invalid, set the number of the room northwest of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к северо-западу от этой комнаты, станет синим для допустимого числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="760"/>
      <location filename="../src/dlgRoomExits.cpp" line="1332"/>
      <source>Set the number of the room northwest of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к северо-западу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="800"/>
      <source>Entered number is invalid, set the number of the room north of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к северу от этой комнаты, станет синим для допустимого числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="810"/>
      <location filename="../src/dlgRoomExits.cpp" line="1366"/>
      <source>Set the number of the room north of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к северу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="849"/>
      <source>Entered number is invalid, set the number of the room northeast of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к северо-востоку от этой комнаты, станет синим для допустимого числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="859"/>
      <location filename="../src/dlgRoomExits.cpp" line="1397"/>
      <source>Set the number of the room northeast of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к северо-востоку от этой комнаты, будет синим для допустимого числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="898"/>
      <source>Entered number is invalid, set the number of the room up from this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты вверх от этой комнаты, станет синим для действительного номера.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="908"/>
      <location filename="../src/dlgRoomExits.cpp" line="1428"/>
      <source>Set the number of the room up from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты вверх от этой комнаты, будет синим для действительного номера или красным для недействительного.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="947"/>
      <source>Entered number is invalid, set the number of the room west of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к западу от этой комнаты, станет синим для допустимого числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="957"/>
      <location filename="../src/dlgRoomExits.cpp" line="1459"/>
      <source>Set the number of the room west of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к западу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="996"/>
      <source>Entered number is invalid, set the number of the room east of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к востоку от этой комнаты, станет синим для действительного числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1006"/>
      <location filename="../src/dlgRoomExits.cpp" line="1490"/>
      <source>Set the number of the room east of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к востоку от этой комнаты, будет синим для действительного числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1045"/>
      <source>Entered number is invalid, set the number of the room down from this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, задайте номер комнаты вниз от этой комнаты, станет синим для действительного номера.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1055"/>
      <location filename="../src/dlgRoomExits.cpp" line="1521"/>
      <source>Set the number of the room down from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты вниз от этой комнаты, будет синим для действительного номера или красным для недействительного.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1094"/>
      <source>Entered number is invalid, set the number of the room southwest of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к юго-западу от этой комнаты, станет синим для действительного числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1104"/>
      <location filename="../src/dlgRoomExits.cpp" line="1552"/>
      <source>Set the number of the room southwest of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к юго-западу от этой комнаты, будет синим для действительного числа или красным для недействительных.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1143"/>
      <source>Entered number is invalid, set the number of the room south of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к югу от этой комнаты, станет синим для допустимого числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1153"/>
      <location filename="../src/dlgRoomExits.cpp" line="1583"/>
      <source>Set the number of the room south of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к югу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1192"/>
      <source>Entered number is invalid, set the number of the room southeast of this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты к юго-востоку от этой комнаты, станет синим для действительного числа.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1202"/>
      <location filename="../src/dlgRoomExits.cpp" line="1614"/>
      <source>Set the number of the room southeast of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к юго-востоку от этой комнаты, будет синим для действительного числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1241"/>
      <source>Entered number is invalid, set the number of the room in from this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, задайте номер комнаты в из этой комнаты, станет синим для действительного номера.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1251"/>
      <location filename="../src/dlgRoomExits.cpp" line="1645"/>
      <source>Set the number of the room in from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты в из этой комнаты, будет синим для действительного номера или красным для недействительного.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1290"/>
      <source>Entered number is invalid, set the number of the room out from this one, will turn blue for a valid number.</source>
      <translation>Введен недопустимый номер, установите номер комнаты из этой комнаты, станет синим для действительного номера.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1300"/>
      <location filename="../src/dlgRoomExits.cpp" line="1676"/>
      <source>Set the number of the room out from this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты снаружи от этой комнаты, будет синим для действительного номера или красным для недействительного.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1324"/>
      <location filename="../src/dlgRoomExits.cpp" line="1358"/>
      <location filename="../src/dlgRoomExits.cpp" line="1389"/>
      <location filename="../src/dlgRoomExits.cpp" line="1420"/>
      <location filename="../src/dlgRoomExits.cpp" line="1451"/>
      <location filename="../src/dlgRoomExits.cpp" line="1482"/>
      <location filename="../src/dlgRoomExits.cpp" line="1513"/>
      <location filename="../src/dlgRoomExits.cpp" line="1544"/>
      <location filename="../src/dlgRoomExits.cpp" line="1575"/>
      <location filename="../src/dlgRoomExits.cpp" line="1606"/>
      <location filename="../src/dlgRoomExits.cpp" line="1637"/>
      <location filename="../src/dlgRoomExits.cpp" line="1668"/>
      <location filename="../src/dlgRoomExits.cpp" line="1781"/>
      <source>Clear the stub exit for this exit to enter an exit roomID.</source>
      <translation>Удалите незавершённый выход сначала перед тем как ввести номер выхода.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1703"/>
      <source>northwest</source>
      <translation>северо-запад</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1704"/>
      <source>north</source>
      <translation>север</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1705"/>
      <source>northeast</source>
      <translation>северо-восток</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1706"/>
      <source>up</source>
      <translation>вверх</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1707"/>
      <source>west</source>
      <translation>запад</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1708"/>
      <source>east</source>
      <translation>восток</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1709"/>
      <source>down</source>
      <translation>вниз</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1710"/>
      <source>southwest</source>
      <translation>юго-запад</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1711"/>
      <source>south</source>
      <translation>юг</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1712"/>
      <source>southeast</source>
      <translation>юго-восток</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1713"/>
      <source>in</source>
      <translation>в</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1714"/>
      <source>out</source>
      <translation>из</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1789"/>
      <source>Set the number of the room %1 of this one, will be blue for a valid number or red for invalid.</source>
      <translation>Установите номер комнаты к %1 от этой комнаты, будет синим для допустимого числа или красным для недопустимого.</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1812"/>
      <source>Exits for room: &quot;%1&quot; [*]</source>
      <translation>Выходы для комнаты: &quot;%1&quot; [*]</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1814"/>
      <source>Exits for room Id: %1 [*]</source>
      <translation>Выходы для комнаты номер: %1[*]</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomExits.cpp" line="1874"/>
      <source>Room Id is invalid, set the number of the room that this special exit leads to, will turn blue for a valid number.</source>
      <translation>Идентификатор комнаты недействителен, задайте номер комнаты, к которому ведет этот специальный выход, станет синим для действительного номера.</translation>
    </message>
  </context>
  <context>
    <name>dlgRoomSymbol</name>
    <message numerus="yes">
      <location filename="../src/dlgRoomSymbol.cpp" line="77"/>
      <source>The only used symbol is &quot;%1&quot; in one or
more of the selected %n room(s), delete this to
clear it from all selected rooms or replace
with a new symbol to use for all the rooms:</source>
      <comment>This is for when applying a new room symbol to one or more rooms and some have the SAME symbol (others may have none) at present, %n is the total number of rooms involved and is at least two. Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>
        <numerusform>Единственный используемый символ - &quot;%1&quot; в выбранных %n комнат. Удалите его чтобы 
очистить его из всех выбранных комн или замените
на новый символ, чтобы использовать его для всех комнат:</numerusform>
        <numerusform>Единственный используемый символ - &quot;%1&quot; в выбранных %n комнат. Удалите его чтобы 
очистить его из всех выбранных комн или замените
на новый символ, чтобы использовать его для всех комнат:</numerusform>
        <numerusform>Единственный используемый символ - &quot;%1&quot; в выбранных %n комнат. Удалите его чтобы 
очистить его из всех выбранных комн или замените
на новый символ, чтобы использовать его для всех комнат:</numerusform>
        <numerusform>Единственный используемый символ - &quot;%1&quot; в выбранных %n комнат. Удалите его чтобы 
очистить его из всех выбранных комнат или замените
на новый символ, чтобы использовать его для всех комнат:</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="88"/>
      <source>The symbol is &quot;%1&quot; in the selected room,
delete this to clear the symbol or replace
it with a new symbol for this room:</source>
      <comment>This is for when applying a new room symbol to one room. Use line feeds to format text into a reasonable rectangle.</comment>
      <translation>Символ &quot;%1&quot; в выбранной комнате,
удалите его, чтобы убрать символ или замените
на новый символ для этой комнаты:</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/dlgRoomSymbol.cpp" line="97"/>
      <source>Choose:
 • an existing symbol from the list below (sorted by most commonly used first)
 • enter one or more graphemes (&quot;visible characters&quot;) as a new symbol
 • enter a space to clear any existing symbols
for all of the %n selected room(s):</source>
      <comment>Use line feeds to format text into a reasonable rectangle if needed, %n is the number of rooms involved.</comment>
      <translation>
        <numerusform>Выберите:
• существующий символ из списка ниже (отсортировано по частоте использования)
• введите одну или больше графем (&quot;видимых символов&quot;) как новый символ
• введите пробел для очистки любых существующих символов
для всех из %n выбранных комнат:</numerusform>
        <numerusform>Выберите:
• существующий символ из списка ниже (отсортировано по частоте использования)
• введите одну или больше графем (&quot;видимых символов&quot;) как новый символ
• введите пробел для очистки любых существующих символов
для всех из %n выбранных комнат:</numerusform>
        <numerusform>Выберите:
• существующий символ из списка ниже (отсортировано по частоте использования)
• введите одну или больше графем (&quot;видимых символов&quot;) как новый символ
• введите пробел для очистки любых существующих символов
для всех из %n выбранных комнат:</numerusform>
        <numerusform>Выберите:
• существующий символ из списка ниже (отсортировано по частоте использования)
• введите одну или больше графем (&quot;видимых символов&quot;) как новый символ
• введите пробел для очистки любых существующих символов
для всех из %n выбранных комнат:</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="131"/>
      <source>%1 {count:%2}</source>
      <comment>Everything after the first parameter (the &apos;%1&apos;) will be removed by processing it as a QRegularExpression programmatically, ensure the translated text has ` {` immediately after the &apos;%1&apos;, and &apos;}&apos; as the very last character, so that the right portion can be extracted if the user clicks on this item when it is shown in the QComboBox it is put in.</comment>
      <translation>%1 {всего: %2}</translation>
    </message>
    <message>
      <location filename="../src/dlgRoomSymbol.cpp" line="202"/>
      <source>Pick color</source>
      <translation>Выберите цвет</translation>
    </message>
  </context>
  <context>
    <name>dlgTriggerEditor</name>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="252"/>
      <source>-- Enter your lua code here
</source>
      <translation>-- Введите код Lua здесь
</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="332"/>
      <source>*** starting new session ***
</source>
      <translation>*** запуск нового сеанса ***
</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="420"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5840"/>
      <source>Triggers</source>
      <translation>Триггеры</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="421"/>
      <source>Show Triggers</source>
      <translation>Показать триггеры</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="424"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5864"/>
      <source>Buttons</source>
      <translation>Кнопки</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="425"/>
      <source>Show Buttons</source>
      <translation>Показать кнопки</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="429"/>
      <source>Aliases</source>
      <translation>Алиасы</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="430"/>
      <source>Show Aliases</source>
      <translation>Показать aлиасы</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="434"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5846"/>
      <source>Timers</source>
      <translation>Таймеры</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="435"/>
      <source>Show Timers</source>
      <translation>Показать таймеры</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="438"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5852"/>
      <source>Scripts</source>
      <translation>Скрипты</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="439"/>
      <source>Show Scripts</source>
      <translation>Показать скрипты</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="442"/>
      <source>Keys</source>
      <translation>Ключи</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="443"/>
      <source>Show Keybindings</source>
      <translation>Показать комбинации клавиш</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="446"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="6252"/>
      <source>Variables</source>
      <translation>Переменные</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="447"/>
      <source>Show Variables</source>
      <translation>Показать переменые</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="450"/>
      <source>Activate</source>
      <translation>Активировать</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="451"/>
      <source>Toggle Active or Non-Active Mode for Triggers, Scripts etc.</source>
      <translation>Переключить активный или неактивный режим для триггеров, скриптов и т.д.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="461"/>
      <source>Add Item</source>
      <translation>Добавить</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="462"/>
      <source>Add new Trigger, Script, Alias or Filter</source>
      <translation>Добавить новый триггер, скрипт, aлиас или фильтр</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="465"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="467"/>
      <source>Delete Item</source>
      <translation>Удалить</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="466"/>
      <source>Delete Trigger, Script, Alias or Filter</source>
      <translation>Удалить триггер, скрипт, aлиас или фильтр</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="473"/>
      <source>Add Group</source>
      <translation>Добавить группу</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="474"/>
      <source>Add new Group</source>
      <translation>Добавить новую группу</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="477"/>
      <source>Save Item</source>
      <translation>Сохранить</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="478"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8324"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8349"/>
      <source>Ctrl+S</source>
      <translation>Ctrl+S</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="480"/>
      <source>Saves the selected item. (Ctrl+S)&lt;/p&gt;Saving causes any changes to the item to take effect.
It will not save to disk, so changes will be lost in case of a computer/program crash (but Save Profile to the right will be secure.)</source>
      <translation>Сохранить выбранный элемент. (Ctrl+S)&lt;/p&gt;Сохранение приводит к тому, что любые изменения в элементе вступают в силу.
Он не будет сохранен на диске, поэтому изменения будут потеряны в случае сбоя компьютера/программы (но "Сохранить Профиль" справа будет безопасным).</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="482"/>
      <source>Saves the selected trigger, script, alias, etc, causing new changes to take effect - does not save to disk though...</source>
      <translation>Сохраняет выбранный триггер, скрипт, алиас и т. д., вызывая новые изменения вступить в силу, но не сохраняет на диск...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="485"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8817"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8823"/>
      <source>Copy</source>
      <translation>Скопировать</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="489"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="490"/>
      <source>Copy the trigger/script/alias/etc</source>
      <translation>Скопировать триггер/скрипт/алиас/т. д</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="499"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8818"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8824"/>
      <source>Paste</source>
      <translation>Вставить</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="503"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="504"/>
      <source>Paste triggers/scripts/aliases/etc from the clipboard</source>
      <translation>Вставить триггеры/скрипты/алиасы/т. д. из буфера обмена</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="518"/>
      <source>Import</source>
      <translation>Импорт</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="522"/>
      <source>Export</source>
      <translation>Экспорт</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="526"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8659"/>
      <source>Save Profile</source>
      <translation>Сохранить профиль</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="528"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8326"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8351"/>
      <source>Ctrl+Shift+S</source>
      <translation>Ctrl+Shift+S</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="531"/>
      <source>Saves your profile. (Ctrl+Shift+S)&lt;p&gt;Saves your entire profile (triggers, aliases, scripts, timers, buttons and keys, but not the map or script-specific settings) to your computer disk, so in case of a computer or program crash, all changes you have done will be retained.&lt;/p&gt;&lt;p&gt;It also makes a backup of your profile, you can load an older version of it when connecting.&lt;/p&gt;&lt;p&gt;Should there be any modules that are marked to be &quot;&lt;i&gt;synced&lt;/i&gt;&quot; this will also cause them to be saved and reloaded into other profiles if they too are active.</source>
      <translation>Сохраняет профиль. (Ctrl + Shift + S)&lt;p&gt;Сохраняет весь профиль (триггеры, алиасы, скрипты, таймеры, кнопки и ключи, но не карту) на вашем компьютере, поэтому в случае сбоя компьютера или программы будут сохранены все сделанные вами изменения.&lt;/p&gt;&lt;p&gt;Также создает резервную копию вашего профиля; вы можете загрузить более старую версию при соединении.&lt;/p&gt;&lt;p&gt;Если есть модули, помеченные как &quot;&lt;i&gt;,синхронизированы&lt;/i&gt;&quot;, это также приведет к их сохранению и перезагрузке в другие профилях где они установлены.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="533"/>
      <source>Saves your entire profile (triggers, aliases, scripts, timers, buttons and keys, but not the map or script-specific settings); also &quot;synchronizes&quot; modules that are so marked.</source>
      <translation>Сохраняет весь профиль (триггеры, алиасы, скрипты, таймеры, кнопки и ключи, но не карту) на вашем компьютере; ещё синхронизирует помеченные модули.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="536"/>
      <source>Save Profile As</source>
      <translation>Cохранить профиль в</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="540"/>
      <source>Statistics</source>
      <translation>Статистика</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="541"/>
      <source>Generates a statistics summary display on the main profile console.</source>
      <translation>Генерирует сводку статистики на главном окне.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="545"/>
      <source>Shows/Hides the errors console in the bottom right of this editor.</source>
      <translation>Показать/скрыть консоль ошибок в правом нижнем углу этого редактора.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="548"/>
      <source>Debug</source>
      <translation>Отладчик</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="549"/>
      <source>Activates Debug Messages -&gt; system will be &lt;b&gt;&lt;i&gt;slower&lt;/i&gt;&lt;/b&gt;.</source>
      <translation>Активирует сообщения отладки -&gt; система будет &lt;b&gt;&lt;i&gt;медленнее&lt;/i&gt;&lt;/b&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="550"/>
      <source>Shows/Hides the separate Central Debug Console - when being displayed the system will be slower.</source>
      <translation>Показать/скрыть консоль централизованной отладки - при включении система будет медленнее.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="573"/>
      <source>Editor Toolbar - %1 - Actions</source>
      <comment>This is the toolbar that is initally placed at the top of the editor.</comment>
      <translation>Панель инструментов редактора - %1 - Кнопки</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="609"/>
      <source>Editor Toolbar - %1 - Items</source>
      <comment>This is the toolbar that is initally placed at the left side of the editor.</comment>
      <translation>Панель инструментов редактора - %1 - Элементы</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="674"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="677"/>
      <source>Search Options</source>
      <translation>Параметры запроса</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="681"/>
      <source>Case sensitive</source>
      <translation>С учетом регистра</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="734"/>
      <source>Type</source>
      <comment>Heading for the first column of the search results</comment>
      <translation>Тип</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="735"/>
      <source>Name</source>
      <comment>Heading for the second column of the search results</comment>
      <translation>Имя</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="736"/>
      <source>Where</source>
      <comment>Heading for the third column of the search results</comment>
      <translation>Где</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="737"/>
      <source>What</source>
      <comment>Heading for the fourth column of the search results</comment>
      <translation>Что</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="784"/>
      <source>start of line</source>
      <translation>начало строки</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="817"/>
      <source>Text to find (trigger pattern)</source>
      <translation>Текст для поиска (шаблон триггера)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2787"/>
      <source>Trying to activate a trigger group, filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка активировать группу триггера, фильтр, триггер или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащую их &lt;em&gt;, удалось&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2789"/>
      <source>Trying to deactivate a trigger group, filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка деактивировать группу триггера, фильтр, триггер или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащую их &lt;em&gt;, удалось&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2793"/>
      <source>&lt;b&gt;Unable to activate a filter or trigger or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;b&gt;Не удается активировать группу триггеров, триггер или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащий их; причина: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;После исправления этой проблемы триггер необходимо будет активировать повторно.&lt;/i&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2930"/>
      <source>Trying to activate a timer group, offset timer, timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка активировать группу таймера, таймер смещения, таймер или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащую их &lt;em&gt;, удалось&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2932"/>
      <source>Trying to deactivate a timer group, offset timer, timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка деактивировать группу таймера, таймер смещения, таймер или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащую их &lt;em&gt;, удалось&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2936"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate an offset timer or timer or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;не удается активировать смещение таймер или таймер или части модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, что их содержит; причина: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;вы должны активировать это после того, как проблема была устранена.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2974"/>
      <source>Trying to activate an alias group, alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка активировать группу алиасов, алиас или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащую их &lt;em&gt;, успешно&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2976"/>
      <source>Trying to deactivate an alias group, alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка деактивировать группу алиасов, алиас или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, которая содержит их &lt;em&gt;, успешна&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="2980"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate an alias or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;не удается активировать алиас или части модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, которая содержит их; причина: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;Вы должны активировать это после того, как проблема была устранена.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3078"/>
      <source>Trying to activate a script group, script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка активировать группу скриптов, скрипт или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащую их &lt;em&gt;, удалась&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3080"/>
      <source>Trying to deactivate a script group, script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка деактивировать группу скриптов, скрипт или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащей их &lt;em&gt;, удалась&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3084"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate a script group or script or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Не удается активировать группу скриптов, скрипт или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащий их; причина: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;123_321 123_321_321_12_321 После исправления этой проблемы ее необходимо будет активировать повторно активировать повторно.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3149"/>
      <source>Trying to activate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка активировать кнопку/меню/панель инструментов или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, содержащую их &lt;em&gt;, удалась&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3151"/>
      <source>Trying to deactivate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them &lt;em&gt;succeeded&lt;/em&gt;.</source>
      <translation>Попытка деактивировать кнопку/меню/панель инструментов или часть модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; &quot;, содержащую их &lt;em&gt;, удалась&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3155"/>
      <source>&lt;p&gt;&lt;b&gt;Unable to activate a button/menu/toolbar or the part of a module &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot; that contains them; reason: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;You will need to reactivate this after the problem has been corrected.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;не удается активировать кнопку или части модуля &quot;&lt;tt&gt;%1&lt;/tt&gt;&quot;, которая содержит их; причина: %2.&lt;/b&gt;&lt;/p&gt;
                     &lt;p&gt;&lt;i&gt;Вы должны активировать это после того, как проблема была устранена.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3269"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4099"/>
      <source>New trigger group</source>
      <translation>Новая группа триггеров</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3271"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4099"/>
      <source>New trigger</source>
      <translation>Новый триггер</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3370"/>
      <source>New timer group</source>
      <translation>Новая группа таймеров</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3372"/>
      <source>New timer</source>
      <translation>Новый таймер</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3460"/>
      <source>Table name...</source>
      <translation>Имя таблицы...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3467"/>
      <source>Variable name...</source>
      <translation>Имя переменной...</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3524"/>
      <source>New key group</source>
      <translation>Новая группа клавишей</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3526"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4799"/>
      <source>New key</source>
      <translation>Новая клавиша</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3608"/>
      <source>New alias group</source>
      <translation>Новая группа алиасов</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3610"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4207"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4277"/>
      <source>New alias</source>
      <translation>Новый алиас</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3699"/>
      <source>New menu</source>
      <translation>Новое меню</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3701"/>
      <source>New button</source>
      <translation>Новая кнопка</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3732"/>
      <source>New toolbar</source>
      <translation>Новая панель инструментов</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3785"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4526"/>
      <source>New script group</source>
      <translation>Новая группа скриптов</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="3787"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="4526"/>
      <source>New script</source>
      <translation>Новый скрипт</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4221"/>
      <source>Alias &lt;em&gt;%1&lt;/em&gt; has an infinite loop - substitution matches its own pattern. Please fix it - this alias isn&apos;t good as it&apos;ll call itself forever.</source>
      <translation>Алиас &lt;em&gt;%1&lt;/em&gt; имеет бесконечный цикл - подстановка соответствует своему шаблону. Пожалуйста, исправьте это - этот псевдоним не хорош, так как он будет себя вызывать безконечно.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4764"/>
      <source>Checked variables will be saved and loaded with your profile.</source>
      <translation>Выбранные переменные будут сохранены и загружены вместе с вашим профилем.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4899"/>
      <source>match on the prompt line</source>
      <translation>матч на оперативную линию</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4902"/>
      <source>match on the prompt line (disabled)</source>
      <translation>матч на строку состояния (отключено)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4903"/>
      <source>A Go-Ahead (GA) signal from the game is required to make this feature work</source>
      <translation>Для работы этой функции требуется сигнал Go-Ahead (GA) от игры</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4953"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5063"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8558"/>
      <source>Foreground color ignored</source>
      <comment>Color trigger ignored foreground color button, ensure all three instances have the same text</comment>
      <translation>Цвет переднего плана игнорируется</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4957"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5067"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8561"/>
      <source>Default foreground color</source>
      <comment>Color trigger default foreground color button, ensure all three instances have the same text</comment>
      <translation>Цвет переднего плана по умолчанию</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4961"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5071"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8564"/>
      <source>Foreground color [ANSI %1]</source>
      <comment>Color trigger ANSI foreground color button, ensure all three instances have the same text</comment>
      <translation>Цвет переднего плана [ANSI %1]</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4968"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5078"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8621"/>
      <source>Background color ignored</source>
      <comment>Color trigger ignored background color button, ensure all three instances have the same text</comment>
      <translation>Цвет заднего плана игнорируется</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4972"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5082"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8624"/>
      <source>Default background color</source>
      <comment>Color trigger default background color button, ensure all three instances have the same text</comment>
      <translation>Цвет фона по умолчанию</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="4976"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5086"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8627"/>
      <source>Background color [ANSI %1]</source>
      <comment>Color trigger ANSI background color button, ensure all three instances have the same text</comment>
      <translation>Цвет фона [ANSI %1]</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5097"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5099"/>
      <source>fault</source>
      <translation>сбой</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5152"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="5156"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8447"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8473"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8967"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8968"/>
      <source>keep</source>
      <comment>Keep the existing colour on matches to highlight. Use shortest word possible so it fits on the button</comment>
      <translation>хранить</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5613"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8421"/>
      <source>Command:</source>
      <translation>Команда:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5652"/>
      <source>Menu properties</source>
      <translation>Свойства</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5662"/>
      <source>Button properties</source>
      <translation>Свойства кнопки</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5670"/>
      <source>Command (down);</source>
      <translation>Команда (вниз);</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5858"/>
      <source>Aliases - Input Triggers</source>
      <translation>Алиасы</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="5870"/>
      <source>Key Bindings</source>
      <translation>Привязки клавиш</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7614"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7618"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7638"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7642"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7662"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7666"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7686"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7690"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7710"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7714"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7734"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7739"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7759"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7763"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7782"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7786"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7805"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7809"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7828"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7832"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7851"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7855"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7874"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7879"/>
      <source>Export Package:</source>
      <translation>Экспортировать пакет:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7614"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7618"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7638"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7642"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7662"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7666"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7686"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7690"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7710"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7714"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7734"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7739"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7759"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7763"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7782"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7786"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7805"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7809"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7828"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7832"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7851"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7855"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7874"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7879"/>
      <source>You have to choose an item for export first. Please select a tree item and then click on export again.</source>
      <translation>Сначала необходимо выбрать элемент для экспорта. Выберите элемент и снова нажмите на экспорт.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7623"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7647"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7671"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7695"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7719"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7744"/>
      <source>Package %1 saved</source>
      <translation>Пакет %1 сохранён</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7768"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7791"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7814"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7837"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7860"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="7884"/>
      <source>Copied %1 to clipboard</source>
      <translation>%1 скопирован в буфер обмена</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7894"/>
      <source>Export Triggers</source>
      <translation>Экспорт Триггеров</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7894"/>
      <source>Mudlet packages (*.xml)</source>
      <translation>Пакеты Mudlet (*.xml)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7908"/>
      <source>export package:</source>
      <translation>экспортировать пакет:</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="7908"/>
      <source>Cannot write file %1:
%2.</source>
      <translation>Не удается записать файл %1:
%2.</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8177"/>
      <source>Import Mudlet Package</source>
      <translation>Импортировать пакет</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8271"/>
      <source>Couldn&apos;t save profile</source>
      <translation>Не удалось сохранить профиль</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8271"/>
      <source>Sorry, couldn&apos;t save your profile - got the following error: %1</source>
      <translation>К сожалению, невозможно сохранить профиль - есть ошибка: %1</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8278"/>
      <source>Backup Profile</source>
      <translation>Сохранить копию профиля</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8278"/>
      <source>trigger files (*.trigger *.xml)</source>
      <translation>триггер-файлы (*.trigger *.xml)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8408"/>
      <source>Images (*.png *.xpm *.jpg)</source>
      <translation>Изображения (*.png *.xpm *.jpg)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8408"/>
      <source>Select Icon</source>
      <translation>Выбрать значок</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8417"/>
      <source>Command (down):</source>
      <translation>Команда (вниз):</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8438"/>
      <source>Select foreground color to apply to matches</source>
      <translation>Выберите цвет переднего плана для применения к совпадением</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8464"/>
      <source>Select background color to apply to matches</source>
      <translation>Выберите цвет фона для применения к совпадениям</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8482"/>
      <source>Choose sound file</source>
      <translation>Выбрать звук</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8486"/>
      <source>Audio files(*.aac *.mp3 *.mp4a *.oga *.ogg *.pcm *.wav *.wma);;Advanced Audio Coding-stream(*.aac);;MPEG-2 Audio Layer 3(*.mp3);;MPEG-4 Audio(*.mp4a);;Ogg Vorbis(*.oga *.ogg);;PCM Audio(*.pcm);;Wave(*.wav);;Windows Media Audio(*.wma);;All files(*.*)</source>
      <comment>This the list of file extensions that are considered for sounds from triggers, the terms inside of the &apos;(&apos;...&apos;)&apos; and the &quot;;;&quot; are used programmatically and should not be changed.</comment>
      <translation>Аудиофайлы(*.aac *.mp3 *.mp4a *.oga *.ogg *.pcm *.wav *.wma);;Advanced Audio Coding-stream(*.aac);;MPEG-2 Audio Layer 3(*.mp3);;MPEG-4 Audio(*.mp4a);;Ogg Vorbis(*.oga *.ogg);;PCM Audio(*.pcm);;Wave(*.wav);;Windows Media Audio(*.wma);;Все файлы(*.*)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8539"/>
      <source>Select foreground trigger color for item %1</source>
      <translation>Выберите цвет переднего плана для шаблона %1</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8603"/>
      <source>Select background trigger color for item %1</source>
      <translation>Выберите цвет заднего плана для шаблона %1</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8652"/>
      <source>Saving…</source>
      <translation>Сохранение…</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8813"/>
      <source>Format All</source>
      <translation>Форматировать все</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8816"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8822"/>
      <source>Cut</source>
      <translation>Вырезать</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8820"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="8826"/>
      <source>Select All</source>
      <translation>Выбрать все</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="8982"/>
      <source>&lt;p&gt;Sound file to play when the trigger fires.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Звуковой файл, который будет играть при срабатывании.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="782"/>
      <source>substring</source>
      <translation>подстрока</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="104"/>
      <source>&lt;p&gt;Alias react on user input. To add a new alias:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define an input &lt;strong&gt;pattern&lt;/strong&gt; either literally or with a Perl regular expression.&lt;/li&gt;&lt;li&gt;Define a &apos;substitution&apos; &lt;strong&gt;command&lt;/strong&gt; to send to the game in clear text &lt;strong&gt;instead of the alias pattern&lt;/strong&gt;, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the alias.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Aliases can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permAlias(&amp;quot;my greets&amp;quot;, &amp;quot;&amp;quot;, &amp;quot;^hi$&amp;quot;, [[send (&amp;quot;say Greetings, traveller!&amp;quot;) echo (&amp;quot;We said hi!&amp;quot;)]])&lt;/code&gt;&lt;/p&gt;&lt;p&gt;You can now greet by typing &apos;hi&apos;&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="114"/>
      <source>&lt;p&gt;Triggers react on game output. To add a new trigger:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define a &lt;strong&gt;pattern&lt;/strong&gt; that you want to trigger on.&lt;/li&gt;&lt;li&gt;Select the appropriate pattern &lt;strong&gt;type&lt;/strong&gt;.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the trigger finds the pattern in the text from the game, or write a script for more complicated needs..&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the trigger.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Triggers can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permSubstringTrigger(&amp;quot;My drink trigger&amp;quot;, &amp;quot;&amp;quot;, &amp;quot;You are thirsty.&amp;quot;, function() send(&amp;quot;drink water&amp;quot;) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will keep you refreshed.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="125"/>
      <source>&lt;p&gt;Scripts organize code and can react to events. To add a new script:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Enter a script in the box below. You can for example define &lt;strong&gt;functions&lt;/strong&gt; to be called by other triggers, aliases, etc.&lt;/li&gt;&lt;li&gt;If you write lua &lt;strong&gt;commands&lt;/strong&gt; without defining a function, they will be run on Mudlet startup and each time you open the script for editing.&lt;/li&gt;&lt;li&gt;If needed, you can register a list of &lt;strong&gt;events&lt;/strong&gt; with the + and - symbols. If one of these events take place, the function with the same name as the script item itself will be called.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the script.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Scripts are run automatically when viewed, even if they are deactivated.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Events can also be added to a script from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua registerAnonymousEventHandler(&amp;quot;nameOfTheMudletEvent&amp;quot;, &amp;quot;nameOfYourFunctionToBeCalled&amp;quot;)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="136"/>
      <source>&lt;p&gt;Timers react after a timespan once or regularly. To add a new timer:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Define the &lt;strong&gt;timespan&lt;/strong&gt; after which the timer should react in a this format: hours : minutes : seconds.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game when the time has passed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the timer.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; If you want the trigger to react only once and not regularly, use the Lua tempTimer() function instead.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Timers can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua tempTimer(3, function() echo(&amp;quot;hello!
&amp;quot;) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will greet you exactly 3 seconds after it was made.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="147"/>
      <source>&lt;p&gt;Buttons react on mouse clicks. To add a new button:&lt;ol&gt;&lt;li&gt;Add a new group to define a new &lt;strong&gt;button bar&lt;/strong&gt; in case you don&apos;t have any.&lt;/li&gt;&lt;li&gt;Add new groups as &lt;strong&gt;menus&lt;/strong&gt; to a button bar or sub-menus to menus.&lt;li&gt;&lt;li&gt;Add new items as &lt;strong&gt;buttons&lt;/strong&gt; to a button bar or menu or sub-menu.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the button is pressed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the toolbar, menu or button. &lt;/li&gt;&lt;/ol&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Deactivated items will be hidden and if they are toolbars or menus then all the items they contain will be also be hidden.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; If a button is made a &lt;strong&gt;click-down&lt;/strong&gt; button then you may also define a clear text command that you want to send to the game when the button is pressed a second time to uncheck it or to write a script to run when it happens - within such a script the Lua &apos;getButtonState()&apos; function reports whether the button is up or down.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="157"/>
      <source>&lt;p&gt;Keys react on keyboard presses. To add a new key binding:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above.&lt;/li&gt;&lt;li&gt;Click on &lt;strong&gt;&apos;grab key&apos;&lt;/strong&gt; and then press your key combination, e.g. including modifier keys like Control, Shift, etc.&lt;/li&gt;&lt;li&gt;Define a clear text &lt;strong&gt;command&lt;/strong&gt; that you want to send to the game if the button is pressed, or write a script for more complicated needs.&lt;/li&gt;&lt;li&gt;&lt;strong&gt;Activate&lt;/strong&gt; the new key binding.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Keys can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua permKey(&amp;quot;my jump key&amp;quot;, &amp;quot;&amp;quot;, mudlet.key.F8, [[send(&amp;quot;jump&amp;quot;]]) end)&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Pressing F8 will make you jump.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="167"/>
      <source>&lt;p&gt;Variables store information. To make a new variable:&lt;ol&gt;&lt;li&gt;Click on the &apos;Add Item&apos; icon above. To add a table instead click &apos;Add Group&apos;.&lt;/li&gt;&lt;li&gt;Select type of variable value (can be a string, integer, boolean)&lt;/li&gt;&lt;li&gt;Enter the value you want to store in this variable.&lt;/li&gt;&lt;li&gt;If you want to keep the variable in your next Mudlet sessions, check the checkbox in the list of variables to the left.&lt;/li&gt;&lt;li&gt;To remove a variable manually, set it to &apos;nil&apos; or click on the &apos;Delete&apos; icon above.&lt;/li&gt;&lt;/ol&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Variables created here won&apos;t be saved when Mudlet shuts down unless you check their checkbox in the list of variables to the left. You could also create scripts with the variables instead.&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Note:&lt;/strong&gt; Variables and tables can also be defined from the command line in the main profile window like this:&lt;/p&gt;&lt;p&gt;&lt;code&gt;lua foo = &amp;quot;bar&amp;quot;&lt;/code&gt;&lt;/p&gt;&lt;p&gt;This will create a string called &apos;foo&apos; with &apos;bar&apos; as its value.&lt;/p&gt;&lt;p&gt;Check the manual for &lt;a href=&apos;http://wiki.mudlet.org/w/Manual:Contents&apos;&gt;more information&lt;/a&gt;.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="242"/>
      <source>-- add your Lua code here</source>
      <translation>-- Введите сюда Lua код</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="544"/>
      <source>Errors</source>
      <translation>Ошибки</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="684"/>
      <source>Match case precisely</source>
      <translation>Учитывать регистр</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="688"/>
      <source>Include variables</source>
      <translation>Включать переменные</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="691"/>
      <source>Search variables (slower)</source>
      <translation>Искать переменные (медленнее)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="783"/>
      <source>perl regex</source>
      <translation>регулярное выражение</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="785"/>
      <source>exact match</source>
      <translation>точное совпадение</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="786"/>
      <source>lua function</source>
      <translation>lua функция</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="787"/>
      <source>line spacer</source>
      <translation>линия прокладки</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="788"/>
      <source>color trigger</source>
      <translation>цветной триггер</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="789"/>
      <source>prompt</source>
      <translation>строка состояния</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1916"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1928"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1956"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1988"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2018"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2030"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2057"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2092"/>
      <source>Trigger</source>
      <translation>Триггер</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1436"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1479"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1551"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1623"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1745"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1829"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1916"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2018"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2124"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2213"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2299"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2423"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2497"/>
      <source>Name</source>
      <translation>Имя</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1491"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1496"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1563"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1568"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1635"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1640"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1839"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1844"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1928"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1933"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2030"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2035"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2134"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2139"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2311"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2316"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2435"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2440"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2509"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2514"/>
      <source>Command</source>
      <translation>Команда</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1956"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1961"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2057"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2062"/>
      <source>Pattern {%1}</source>
      <translation>Шаблон {%1}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1521"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1526"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1593"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1598"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1715"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1720"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1799"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1804"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1886"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1891"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1988"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1993"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2092"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2097"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2181"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2186"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2267"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2272"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2391"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2396"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2465"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2470"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2539"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2544"/>
      <source>Lua code (%1:%2)</source>
      <translation>Код Lua (%1:%2)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1829"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1839"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1856"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1886"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2124"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2134"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2151"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2181"/>
      <source>Alias</source>
      <translation>Алиас</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1856"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1861"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2151"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2156"/>
      <source>Pattern</source>
      <translation>Шаблон</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1745"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1767"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1799"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2213"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2235"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2267"/>
      <source>Script</source>
      <translation>Скрипт</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1767"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1772"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2235"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2240"/>
      <source>Event Handler</source>
      <translation>Обработчик событий</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1623"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1635"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1654"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1715"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2299"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2311"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2330"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2391"/>
      <source>Button</source>
      <translation>Кнопка</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1635"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1640"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2311"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2316"/>
      <source>Command {Down}</source>
      <translation>Команда (вниз)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1654"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1659"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2330"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2335"/>
      <source>Command {Up}</source>
      <translation>Команда (вверх)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1683"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2359"/>
      <source>Action</source>
      <translation>Кнопка</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1683"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1688"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2359"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2364"/>
      <source>Stylesheet {L: %1 C: %2}</source>
      <translation>Таблица стилей {Л: %1 С: %2}</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1551"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1563"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1593"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2423"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2435"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2465"/>
      <source>Timer</source>
      <translation>Таймер</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1479"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1491"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1521"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2497"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2509"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="2539"/>
      <source>Key</source>
      <translation>Ключ</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1436"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1450"/>
      <source>Variable</source>
      <translation>Переменые</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerEditor.cpp" line="1450"/>
      <location filename="../src/dlgTriggerEditor.cpp" line="1456"/>
      <source>Value</source>
      <translation>Значение</translation>
    </message>
  </context>
  <context>
    <name>dlgTriggerPatternEdit</name>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="52"/>
      <source>Text to find (anywhere in the game output)</source>
      <translation>Текст для поиска (в любом местe строки)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="55"/>
      <source>Text to find (as a regular expression pattern)</source>
      <translation>Текст для поиска (как шаблон регулярного выражения)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="58"/>
      <source>Text to find (from beginning of the line)</source>
      <translation>Текст для поиска (от начала строки)</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="61"/>
      <source>Exact line to match</source>
      <translation>Точное совпадение</translation>
    </message>
    <message>
      <location filename="../src/dlgTriggerPatternEdit.cpp" line="64"/>
      <source>Lua code to run (return true to match)</source>
      <translation>Код Lua для запуска (возвращает true для соответствия)</translation>
    </message>
  </context>
  <context>
    <name>dlgVarsMainArea</name>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="51"/>
      <location filename="../src/dlgVarsMainArea.cpp" line="78"/>
      <source>Auto-Type</source>
      <translation>Авто-Тип</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="52"/>
      <source>key (string)</source>
      <translation>ключ (текст)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="53"/>
      <source>index (integer number)</source>
      <translation>индекс (целое число)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="54"/>
      <source>table (use &quot;Add Group&quot; to create)</source>
      <translation>таблица (используйте &quot;Добавить группу&quot; для создания)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="55"/>
      <source>function (cannot create from GUI)</source>
      <translation>функция (невозможно создать из GUI)</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="79"/>
      <source>string</source>
      <translation>string</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="80"/>
      <source>number</source>
      <translation>number</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="81"/>
      <source>boolean</source>
      <translation>boolean</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="82"/>
      <source>table</source>
      <translation>таблица</translation>
    </message>
    <message>
      <location filename="../src/dlgVarsMainArea.cpp" line="83"/>
      <source>function</source>
      <translation>function</translation>
    </message>
  </context>
  <context>
    <name>edbee::TextEditorComponent</name>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="578"/>
      <source>Cut</source>
      <translation>Вырезать</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="579"/>
      <source>Copy</source>
      <translation>Скопировать</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="580"/>
      <source>Paste</source>
      <translation>Вставить</translation>
    </message>
    <message>
      <location filename="../3rdparty/edbee-lib/edbee-lib/edbee/views/components/texteditorcomponent.cpp" line="582"/>
      <source>Select All</source>
      <translation>Выбрать все</translation>
    </message>
  </context>
  <context>
    <name>irc</name>
    <message>
      <location filename="../src/ui/irc.ui" line="25"/>
      <source>Mudlet IRC Client</source>
      <translation>Mudlet IRC-клиент</translation>
    </message>
  </context>
  <context>
    <name>keybindings_main_area</name>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="23"/>
      <source>Name:</source>
      <translation>Имя:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="33"/>
      <source>&lt;p&gt;Choose a good, ideally unique, name for your key or key group. This will be displayed in the key tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите хорошее (в идеале уникальное) имя для ключа или группы ключей. Оно будет показано в списке ключей.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="40"/>
      <source>Command:</source>
      <translation>Команда:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="50"/>
      <source>&lt;p&gt;Type in one or more commands you want the key to send directly to the game when pressed. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="53"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Текст для отправки в игру как есть (опционально)</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="60"/>
      <source>Key Binding:</source>
      <translation>Привязка клавиш:</translation>
    </message>
    <message>
      <location filename="../src/ui/keybindings_main_area.ui" line="77"/>
      <source>Grab New Key</source>
      <translation>Создать ключ</translation>
    </message>
  </context>
  <context>
    <name>lacking_mapper_script</name>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="23"/>
      <source>No mapping script found</source>
      <translation>Скрипт для карты не найден</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="35"/>
      <source>&lt;p&gt;It seems that you don&apos;t have any &lt;a href=&quot;http://wiki.mudlet.org/w/Mapping_script&quot;&gt;mapping scripts&lt;/a&gt; installed yet - the mapper needs you to have one for your game, so it can track where you are and autowalk you. You can either make one yourself, or import an existing one that someone else made.&lt;/p&gt;&lt;p&gt;Would you like to see if any are available?&lt;/p&gt;</source>
      <translation>&lt;p&gt;Похоже, что у вас&apos;еще не установлены &lt;a href=&quot;http://wiki.mudlet.org/w/Mapping_script&quot;&gt;скрипты (mapping scripts) отвечающие за создание карт&lt;/a&gt; - картографу(mapper) необходим скрипт чтобы он мог отслеживать нахождение и перемещение на карте вашего персонажа. Вы можете либо создать его самостоятельно, либо импортировать существующий, который сделал кто-то другой.&lt;/p&gt;&lt;p&gt;Хотите посмотреть, существует ли такой?&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="86"/>
      <source>Close</source>
      <translation>Закрыть</translation>
    </message>
    <message>
      <location filename="../src/ui/lacking_mapper_script.ui" line="93"/>
      <source>Find some scripts</source>
      <translation>Найти скрипты</translation>
    </message>
  </context>
  <context>
    <name>main</name>
    <message>
      <location filename="../src/main.cpp" line="169"/>
      <source>Profile to open automatically</source>
      <translation>Профиль, который будет автоматически открыт</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="169"/>
      <source>profile</source>
      <translation>профиль</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="172"/>
      <location filename="../src/main.cpp" line="178"/>
      <source>Display help and exit</source>
      <translation>Показать справку и выйти</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="175"/>
      <source>Display version and exit</source>
      <translation>Показать версию и выйти</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="188"/>
      <source>Usage: %1 [OPTION...]
       -h, --help           displays this message.
       -v, --version        displays version information.
       -q, --quiet          no splash screen on startup.
       --profile=&lt;profile&gt;  additional profile to open

There are other inherited options that arise from the Qt Libraries which are
less likely to be useful for normal use of this application:
</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/main.cpp" line="245"/>
      <source>%1 %2%3 (with debug symbols, without optimisations)
</source>
      <comment>%1 is the name of the application like mudlet or Mudlet.exe, %2 is the version number like 3.20 and %3 is a build suffix like -dev</comment>
      <translation>%1 %2%3 (символы отладки, без оптимизаций)
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="251"/>
      <source>Qt libraries %1 (compilation) %2 (runtime)
</source>
      <comment>%1 and %2 are version numbers</comment>
      <translation>Qt библиотеки %1 (компиляция) %2 (среда выполнения)
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="255"/>
      <source>Licence GPLv2+: GNU GPL version 2 or later - http://gnu.org/licenses/gpl.html
</source>
      <translation>Лицензия GPLv2 +: GNU GPL версии 2 или более поздней версии http://gnu.org/licenses/gpl.html
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="256"/>
      <source>This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
</source>
      <translation>Это бесплатное программное обеспечение: вы можете изменять и распространять его.
НЕТ ГАРАНТИЙ в пределах, разрешенных законом.
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="236"/>
      <source>Report bugs to: https://github.com/Mudlet/Mudlet/issues
</source>
      <translation>Об ошибках сообщайте: https://github.com/Mudlet/Mudlet/issues
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="237"/>
      <source>Project home page: http://www.mudlet.org/
</source>
      <translation>Главная страница проекта: http://www.mudlet.org
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="254"/>
      <source>Copyright © 2008-2021  Mudlet developers
</source>
      <translation>Авторское право © 2008-2021 Mudlet разработчики
</translation>
    </message>
    <message>
      <location filename="../src/main.cpp" line="280"/>
      <source>Version: %1</source>
      <translation>Версия: %1</translation>
    </message>
  </context>
  <context>
    <name>main_window</name>
    <message>
      <location filename="../src/ui/main_window.ui" line="95"/>
      <source>Toolbox</source>
      <translation>Набор инструментов</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="109"/>
      <source>Options</source>
      <translation>Настройки</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="116"/>
      <source>Help</source>
      <translation>Справка</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="126"/>
      <source>About</source>
      <translation>О программе</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="134"/>
      <source>Games</source>
      <translation>Игры</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="149"/>
      <source>Play</source>
      <translation>Играть</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="152"/>
      <source>&lt;p&gt;Configure connection details of, and make a connection to, game servers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Настроить параметры соединения и подключения к игровым серверам.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="160"/>
      <source>&lt;p&gt;Disconnect from the current game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Отключиться от текущего сервера.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="168"/>
      <source>&lt;p&gt;Disconnect and then reconnect to the current game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Отключится и снова подключится к текущему игровому серверу.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="176"/>
      <source>&lt;p&gt;Configure setting for the Mudlet application globally and for the current profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Настройка параметров для Mudlet глобально и для текущего профиля.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="184"/>
      <source>&lt;p&gt;Opens the Editor for the different types of things that can be scripted by the user.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Открывает редактор для различных типов вещей, которые могут быть написаны пользователем.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="213"/>
      <source>IRC</source>
      <translation>IRC</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="216"/>
      <location filename="../src/ui/main_window.ui" line="253"/>
      <source>&lt;p&gt;Opens a built-in IRC chat on the #mudlet channel on Freenode IRC servers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Открывает встроенный чат IRC на канале #mudlet на серверах IRC Freenode.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="224"/>
      <source>&lt;p&gt;Opens an (on-line) collection of &quot;Educational Mudlet screencasts&quot; in your system web-browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Открывает (он-лайн) коллекцию &quot;образовательных Mudlet скринкастов&quot; в вашем веб-браузере.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="232"/>
      <source>&lt;p&gt;Load a previous saved game session that can be used to test Mudlet lua systems (off-line!).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Загрузите предыдущий сохраненный игровой сеанс, который можно использовать для тестирования своих систем (офф-лайн!).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="240"/>
      <source>&lt;p&gt;Opens the (on-line) Mudlet Forum in your system web-browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Открывает (он-лайн) Форум Mudlet в веб-браузере.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="261"/>
      <source>&lt;p&gt;Show or hide the game map.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Показать или скрыть карту игры.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="269"/>
      <source>&lt;p&gt;Install and remove collections of Mudlet lua items (packages).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установка и удаление коллекций предметов (пакетов) Mudlet lua.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="277"/>
      <source>&lt;p&gt;Install and remove (share- &amp; sync-able) collections of Mudlet lua items (modules).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установка и удаление коллекций предметов (синхронизируемых) Mudlet lua.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="285"/>
      <source>&lt;p&gt;Gather and bundle up collections of Mudlet Lua items and other reasources into a module.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Собрать и объединить в модуль скрипты Lua Lua и другие материалы.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="316"/>
      <source>&lt;p&gt;Hide / show the search area and buttons at the bottom of the screen.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Скрыть/показать область поиска и кнопки в нижней части экрана.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="321"/>
      <source>Discord help channel</source>
      <translation>Канал помощи Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="326"/>
      <location filename="../src/ui/main_window.ui" line="329"/>
      <source>Report an issue</source>
      <translation>Сообщить об проблеме</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="332"/>
      <source>The public test build gets newer features to you quicker, and you help us find issues in them quicker. Spotted something odd? Let us know asap!</source>
      <translation>Общедоступная тестовая сборка быстрее предоставляет вам новые возможности, и вы помогаете нам быстрее находить в них проблемы. Замели что-то странное? Сообщите нам как можно скорее!</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="157"/>
      <source>Disconnect</source>
      <translation>Отключиться</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="165"/>
      <source>Reconnect</source>
      <translation>Переподключиться</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="173"/>
      <source>Preferences</source>
      <translation>Настройки</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="181"/>
      <source>Script editor</source>
      <translation>Редактор скриптов</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="189"/>
      <source>Notepad</source>
      <translation>Блокнот</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="197"/>
      <source>API Reference</source>
      <translation>Справочник по API</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="237"/>
      <source>Online forum</source>
      <translation>Форум</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="205"/>
      <source>About Mudlet</source>
      <translation>О Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="192"/>
      <source>&lt;p&gt;Opens a free form text editor window for this profile that is saved between sessions.&lt;/p&gt;</source>
      <translation>&lt;p&gt;открывает окно текстового редактора для етого профиля, который сохраняется между сеансами.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="200"/>
      <source>&lt;p&gt;Opens the Mudlet manual in your web browser.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Открывает руководство по Mudlet в вашем веб-браузере.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="208"/>
      <source>&lt;p&gt;Inform yourself about this version of Mudlet, the people who made it and the licence under which you can share it.&lt;/p&gt;</source>
      <comment>Tooltip for About Mudlet sub-menu item and main toolbar button (or menu item if an update has changed that control to have a popup menu instead) (Used in 3 places - please ensure all have the same translation).</comment>
      <translation>&lt;p&gt;Информируйте себя об этой версии Mudlet, людей, которые сделали его и лицензии, под которой вы можете поделиться им.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="221"/>
      <source>Video tutorials</source>
      <translation>Видеоучебники</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="229"/>
      <source>Load replay</source>
      <translation>Загрузить повтор</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="245"/>
      <source>Check for updates...</source>
      <translation>Проверить обновления...</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="250"/>
      <source>Live help chat</source>
      <translation>Чат с Поддержкой</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="258"/>
      <source>Show map</source>
      <translation>Показать карту</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="266"/>
      <source>Package manager</source>
      <translation>Управление пакетами</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="274"/>
      <source>Module manager</source>
      <translation>Управление модулями</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="282"/>
      <source>Package exporter (experimental)</source>
      <translation>Экспортер пакетов (экспериментальный)</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="299"/>
      <source>MultiView</source>
      <translation>Мульти-обзор</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="302"/>
      <source>&lt;p&gt;Splits the Mudlet screen to show multiple profiles at once; disabled when less than two are loaded.&lt;/p&gt;</source>
      <comment>Same text is used in 2 places.</comment>
      <translation>&lt;p&gt;Разделяет экран Mudlet для показа нескольких профилей за один раз; отключено, когда загружено менее двух профилей.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/main_window.ui" line="307"/>
      <source>Compact input line</source>
      <translation>Компактная строка ввода</translation>
    </message>
  </context>
  <context>
    <name>mapper</name>
    <message>
      <location filename="../src/ui/mapper.ui" line="60"/>
      <source>^</source>
      <translation>^</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="452"/>
      <source>Area:</source>
      <translation>Область:</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="521"/>
      <source>Rooms</source>
      <translation>Комнаты</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="550"/>
      <source>Exits</source>
      <translation>Выходы</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="579"/>
      <source>Round</source>
      <translation>Круглые</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="586"/>
      <source>Info</source>
      <translation>Инфо</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="602"/>
      <source>IDs</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="618"/>
      <source>Names</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="771"/>
      <source>top + 1</source>
      <translation>топ + 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="745"/>
      <source>bottom + 1</source>
      <translation>низ + 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="758"/>
      <source>bottom -1</source>
      <translation>низ - 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="784"/>
      <source>top - 1</source>
      <translation>топ - 1</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="732"/>
      <source>1 level</source>
      <translation>1 уровень</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="427"/>
      <source>3D</source>
      <translation>3D</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="680"/>
      <source>default</source>
      <translation>по умолчанию</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="693"/>
      <source>top view</source>
      <translation>вид сверху</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="706"/>
      <source>side view</source>
      <translation>вид сбоку</translation>
    </message>
    <message>
      <location filename="../src/ui/mapper.ui" line="719"/>
      <source>all levels</source>
      <translation>все уровни</translation>
    </message>
  </context>
  <context>
    <name>module_manager</name>
    <message>
      <location filename="../src/ui/module_manager.ui" line="79"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Modules are a way to utilize a common package across many sessions - unlike packages, which are installed per-profile.&lt;/p&gt;
&lt;p&gt;Modules are loaded in ascending priority (1 will get loaded before 2 and so on), modules with the same priority will be loaded in alphabetical order.&lt;/p&gt;
&lt;p&gt;Modules with negative priority will be loaded before script packages.&lt;/p&gt;
&lt;p&gt;The &lt;b&gt;&lt;i&gt;Sync&lt;/i&gt;&lt;/b&gt; option, if it is enabled, will, when the module in &lt;b&gt;this profile&lt;/b&gt; is saved &lt;b&gt;to disk&lt;/b&gt;, cause it to be then reloaded into all profiles which also are using the same file that contains the module. To make several profiles use the same module, install it in each profile through this module manager (which should be opened when the particular profile is the one currently in the foreground).&lt;/p&gt;&lt;p&gt;
&lt;i&gt;Note: &lt;b&gt;.zip&lt;/b&gt; and &lt;b&gt;.mpackage&lt;/b&gt; modules are currently unable to be synced, only &lt;b&gt;.xml&lt;/b&gt; packages are able to be synchronized across profiles at the moment.&lt;/i&gt;&lt;/p&gt;
&lt;p&gt;For each save operation, modules are backed up to a directory, &lt;i&gt;moduleBackups&lt;/i&gt;, within your Mudlet profile directory.&lt;/p&gt;
&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="129"/>
      <source>Uninstall</source>
      <translation>Удалить</translation>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="142"/>
      <source>Install</source>
      <translation>Установить</translation>
    </message>
    <message>
      <location filename="../src/ui/module_manager.ui" line="149"/>
      <source>Module Help</source>
      <translation>Управление модулями</translation>
    </message>
  </context>
  <context>
    <name>mudlet</name>
    <message>
      <location filename="../src/mudlet.cpp" line="708"/>
      <source>Afrikaans</source>
      <extracomment>In the translation source texts the language is the leading term, with, generally, the (primary) country(ies) in the brackets, with a trailing language disabiguation after a &apos;-&apos; Chinese is an exception!</extracomment>
      <translation>Африкаанс</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="709"/>
      <source>Afrikaans (South Africa)</source>
      <translation>Африкаанс (Южная Африка)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="710"/>
      <source>Aragonese</source>
      <translation>Арагонский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="711"/>
      <source>Aragonese (Spain)</source>
      <translation>Арагонский (Испания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="712"/>
      <source>Arabic</source>
      <translation>Арабский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="713"/>
      <source>Arabic (United Arab Emirates)</source>
      <translation>Арабский (Объединенные Арабские Эмираты)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="714"/>
      <source>Arabic (Bahrain)</source>
      <translation>Арабский (Бахрейн)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="715"/>
      <source>Arabic (Algeria)</source>
      <translation>Арабский (Алжир)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="717"/>
      <source>Arabic (India)</source>
      <translation>Арабский (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="718"/>
      <source>Arabic (Iraq)</source>
      <translation>Арабский (Ирак)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="719"/>
      <source>Arabic (Jordan)</source>
      <translation>Арабский (Иордания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="720"/>
      <source>Arabic (Kuwait)</source>
      <translation>Арабский (Кувейт)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="721"/>
      <source>Arabic (Lebanon)</source>
      <translation>Арабский (Ливан)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="722"/>
      <source>Arabic (Libya)</source>
      <translation>Арабский (Ливия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="723"/>
      <source>Arabic (Morocco)</source>
      <translation>Арабский (Марокко)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="724"/>
      <source>Arabic (Oman)</source>
      <translation>Арабский (Оман)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="725"/>
      <source>Arabic (Qatar)</source>
      <translation>Арабский (Катар)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="726"/>
      <source>Arabic (Saudi Arabia)</source>
      <translation>Арабский (Саудовская Аравия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="727"/>
      <source>Arabic (Sudan)</source>
      <translation>Арабский (Судан)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="728"/>
      <source>Arabic (Syria)</source>
      <translation>Арабский (Сирия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="729"/>
      <source>Arabic (Tunisia)</source>
      <translation>Арабский (Тунис)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="730"/>
      <source>Arabic (Yemen)</source>
      <translation>Арабский (Йемен)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="731"/>
      <source>Belarusian</source>
      <translation>Белорусский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="732"/>
      <source>Belarusian (Belarus)</source>
      <translation>Белорусский (Беларусь)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="733"/>
      <source>Belarusian (Russia)</source>
      <translation>Белорусский (Россия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="734"/>
      <source>Bulgarian</source>
      <translation>Болгарский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="735"/>
      <source>Bulgarian (Bulgaria)</source>
      <translation>Болгарский (Болгария)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="736"/>
      <source>Bangla</source>
      <translation>Бангла</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="737"/>
      <source>Bangla (Bangladesh)</source>
      <translation>Бангла (Бангладеш)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="738"/>
      <source>Bangla (India)</source>
      <translation>Бангла (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="739"/>
      <source>Tibetan</source>
      <translation>Тибетский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="740"/>
      <source>Tibetan (China)</source>
      <translation>Тибетский (Китай)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="741"/>
      <source>Tibetan (India)</source>
      <translation>Тибетский (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="742"/>
      <source>Breton</source>
      <translation>Бретонский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="743"/>
      <source>Breton (France)</source>
      <translation>Бретонский (Франция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="744"/>
      <source>Bosnian</source>
      <translation>Боснийский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="745"/>
      <source>Bosnian (Bosnia/Herzegovina)</source>
      <translation>Боснийский (Босния и Герцеговина)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="746"/>
      <source>Bosnian (Bosnia/Herzegovina - Cyrillic alphabet)</source>
      <translation>Боснийский (Босния и Герцеговина-кириллица)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="747"/>
      <source>Catalan</source>
      <translation>Каталанский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="748"/>
      <source>Catalan (Spain)</source>
      <translation>Каталанский (Испания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="749"/>
      <source>Catalan (Spain - Valencian)</source>
      <translation>Каталонский (Испания - Валенсия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="750"/>
      <source>Central Kurdish</source>
      <translation>Центральный Курдский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="751"/>
      <source>Central Kurdish (Iraq)</source>
      <translation>Центральный курдский (Ирак)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="752"/>
      <source>Czech</source>
      <translation>Чешский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="753"/>
      <source>Czech (Czechia)</source>
      <translation>Чешский (Чехия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="754"/>
      <source>Danish</source>
      <translation>Датский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="755"/>
      <source>Danish (Denmark)</source>
      <translation>Датский (Дания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="756"/>
      <source>German</source>
      <translation>Немецкий (German)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="757"/>
      <source>German (Austria)</source>
      <translation>Немецкий (Австрия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="758"/>
      <source>German (Austria, revised by F M Baumann)</source>
      <translation>Немецкий (Австрия, пересмотренный F M Baumann)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="759"/>
      <source>German (Belgium)</source>
      <translation>Немецкий (Бельгия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="760"/>
      <source>German (Switzerland)</source>
      <translation>Немецкий (Швейцария)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="761"/>
      <source>German (Switzerland, revised by F M Baumann)</source>
      <translation>Немецкий (Швейцария, пересмотренный F M Baumann)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="762"/>
      <source>German (Germany/Belgium/Luxemburg)</source>
      <translation>Немецкий (Германия/Бельгия/Люксембург)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="763"/>
      <source>German (Germany/Belgium/Luxemburg, revised by F M Baumann)</source>
      <translation>Немецкий (Германия/Бельгия/Люксембург, пересмотренный F M Baumann)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="764"/>
      <source>German (Liechtenstein)</source>
      <translation>Немецкий (Лихтенштейн)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="765"/>
      <source>German (Luxembourg)</source>
      <translation>Немецкий (Люксембург)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="766"/>
      <source>Greek</source>
      <translation>Греческий (Greek)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="767"/>
      <source>Greek (Greece)</source>
      <translation>Греческий (Греция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="768"/>
      <source>English</source>
      <translation>Английский (English)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="769"/>
      <source>English (Antigua/Barbuda)</source>
      <translation>Английский (Антигуа/Барбуда)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="770"/>
      <source>English (Australia)</source>
      <translation>Английский (Австралия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="772"/>
      <source>English (Bahamas)</source>
      <translation>Английский (Багамские Острова)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="773"/>
      <source>English (Botswana)</source>
      <translation>Английский (Ботсвана)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="774"/>
      <source>English (Belize)</source>
      <translation>Английский (Белиз)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="716"/>
      <source>Arabic (Egypt)</source>
      <translation>Арабский (Египет)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="478"/>
      <source>&lt;p&gt;Splits the Mudlet screen to show multiple profiles at once; disabled when less than two are loaded.&lt;/p&gt;</source>
      <comment>Same text is used in 2 places.</comment>
      <translation>&lt;p&gt;Разделяет экран Mudlet для показа нескольких профилей за один раз; отключено, когда загружено менее двух профилей.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="490"/>
      <source>Report issue</source>
      <translation>Сообщить о проблеме</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="771"/>
      <source>English (Australia, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Английский (Австралия, Большой)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="775"/>
      <source>English (Canada)</source>
      <translation>Английский (Канада)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="776"/>
      <source>English (Canada, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Английский (Канада, Большой)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="777"/>
      <source>English (Denmark)</source>
      <translation>Английский (Дания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="778"/>
      <source>English (United Kingdom)</source>
      <translation>Английский (Великобритания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="779"/>
      <source>English (United Kingdom, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Английский (Великобритания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="780"/>
      <source>English (United Kingdom - &apos;ise&apos; not &apos;ize&apos;)</source>
      <comment>This dictionary prefers the British &apos;ise&apos; form over the American &apos;ize&apos; one.</comment>
      <translation>Английский (Соединенное Королевство - &apos;ise&apos; не &apos;изе&apos;)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="781"/>
      <source>English (Ghana)</source>
      <translation>Английский (Гана)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="782"/>
      <source>English (Hong Kong SAR China)</source>
      <translation>Английский (Гонконг, САР, Китай)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="783"/>
      <source>English (Ireland)</source>
      <translation>Английский (Ирландия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="784"/>
      <source>English (India)</source>
      <translation>Английский (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="785"/>
      <source>English (Jamaica)</source>
      <translation>Английский (Ямайка)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="786"/>
      <source>English (Namibia)</source>
      <translation>Английский (Намибия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="787"/>
      <source>English (Nigeria)</source>
      <translation>Английский (Нигерия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="788"/>
      <source>English (New Zealand)</source>
      <translation>Английский (Новая Зеландия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="789"/>
      <source>English (Philippines)</source>
      <translation>Английский (Филиппины)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="790"/>
      <source>English (Singapore)</source>
      <translation>Английский (Сингапур)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="791"/>
      <source>English (Trinidad/Tobago)</source>
      <translation>Английский (Тринидад и Тобаго)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="792"/>
      <source>English (United States)</source>
      <translation>Английский (США)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="793"/>
      <source>English (United States, Large)</source>
      <comment>This dictionary contains larger vocabulary.</comment>
      <translation>Английский (Соединенные Штаты, Большой)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="794"/>
      <source>English (South Africa)</source>
      <translation>Английский (Южная Африка)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="795"/>
      <source>English (Zimbabwe)</source>
      <translation>Английский (Зимбабве)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="796"/>
      <source>Spanish</source>
      <translation>Испанский (Spanish)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="797"/>
      <source>Spanish (Argentina)</source>
      <translation>Испанский (Аргентина)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="798"/>
      <source>Spanish (Bolivia)</source>
      <translation>Испанский (Боливия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="799"/>
      <source>Spanish (Chile)</source>
      <translation>Испанский (Чили)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="800"/>
      <source>Spanish (Colombia)</source>
      <translation>Испанский (Колумбия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="801"/>
      <source>Spanish (Costa Rica)</source>
      <translation>Испанский (Коста-Рика)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="802"/>
      <source>Spanish (Cuba)</source>
      <translation>Испанский (Куба)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="803"/>
      <source>Spanish (Dominican Republic)</source>
      <translation>Испанский (Доминиканская Республика)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="804"/>
      <source>Spanish (Ecuador)</source>
      <translation>Испанский (Эквадор)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="805"/>
      <source>Spanish (Spain)</source>
      <translation>Испанский (Испания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="806"/>
      <source>Spanish (Guatemala)</source>
      <translation>Испанский (Гватемала)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="807"/>
      <source>Spanish (Honduras)</source>
      <translation>Испанский (Гондурас)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="808"/>
      <source>Spanish (Mexico)</source>
      <translation>Испанский (Мексика)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="809"/>
      <source>Spanish (Nicaragua)</source>
      <translation>Испанский (Никарагуа)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="810"/>
      <source>Spanish (Panama)</source>
      <translation>Испанский (Панама)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="811"/>
      <source>Spanish (Peru)</source>
      <translation>Испанский (Перу)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="812"/>
      <source>Spanish (Puerto Rico)</source>
      <translation>Испанский (Пуэрто-Рико)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="813"/>
      <source>Spanish (Paraguay)</source>
      <translation>Испанский (Парагвай)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="814"/>
      <source>Spanish (El Savador)</source>
      <translation>Испанский (Эль Савадор)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="815"/>
      <source>Spanish (United States)</source>
      <translation>Испанский (США)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="816"/>
      <source>Spanish (Uruguay)</source>
      <translation>Испанский (Уругвай)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="817"/>
      <source>Spanish (Venezuela)</source>
      <translation>Испанский (Венесуэла)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="818"/>
      <source>Estonian</source>
      <translation>Эстонский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="819"/>
      <source>Estonian (Estonia)</source>
      <translation>Эстонский (Эстония)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="820"/>
      <source>Basque</source>
      <translation>Баскский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="821"/>
      <source>Basque (Spain)</source>
      <translation>Баскский (Испания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="822"/>
      <source>Basque (France)</source>
      <translation>Баскский (Франция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="823"/>
      <source>French</source>
      <translation>Французский (French)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="824"/>
      <source>French (Belgium)</source>
      <translation>Французский (Бельгия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="825"/>
      <source>French (Catalan)</source>
      <translation>Французский (Каталонский)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="826"/>
      <source>French (Switzerland)</source>
      <translation>Французский (Швейцария)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="827"/>
      <source>French (France)</source>
      <translation>Французский (Франция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="828"/>
      <source>French (Luxemburg)</source>
      <translation>Французский (Люксембург)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="829"/>
      <source>French (Monaco)</source>
      <translation>Французский (Монако)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="830"/>
      <source>Gaelic</source>
      <translation>Гэльский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="831"/>
      <source>Gaelic (United Kingdom {Scots})</source>
      <translation>Гэльский (Соединенное Королевство)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="832"/>
      <source>Galician</source>
      <translation>Галисийский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="833"/>
      <source>Galician (Spain)</source>
      <translation>Галисийский (Испания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="834"/>
      <source>Gujarati</source>
      <translation>Гуджарати</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="835"/>
      <source>Gujarati (India)</source>
      <translation>Гуджарати (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="836"/>
      <source>Hebrew</source>
      <translation>Иврит</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="837"/>
      <source>Hebrew (Israel)</source>
      <translation>Иврит (Израиль)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="838"/>
      <source>Hindi</source>
      <translation>Хинди</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="839"/>
      <source>Hindi (India)</source>
      <translation>Хинди (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="840"/>
      <source>Croatian</source>
      <translation>Хорватский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="841"/>
      <source>Croatian (Croatia)</source>
      <translation>Хорватский (Хорватия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="842"/>
      <source>Hungarian</source>
      <translation>Венгерский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="843"/>
      <source>Hungarian (Hungary)</source>
      <translation>Венгерский (Венгрия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="844"/>
      <source>Armenian</source>
      <translation>Армении</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="845"/>
      <source>Armenian (Armenia)</source>
      <translation>Армянский (Армения)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="846"/>
      <source>Interlingue</source>
      <comment>formerly known as Occidental, and not to be mistaken for Interlingua</comment>
      <translation>Интерлинг</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="847"/>
      <source>Icelandic</source>
      <translation>Исландский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="848"/>
      <source>Icelandic (Iceland)</source>
      <translation>Исландский (Исландия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="849"/>
      <source>Italian</source>
      <translation>Итальянский (Italian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="850"/>
      <source>Italian (Switzerland)</source>
      <translation>Итальянский (Швейцария)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="851"/>
      <source>Italian (Italy)</source>
      <translation>Итальянский (Италия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="852"/>
      <source>Kazakh</source>
      <translation>Казахский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="853"/>
      <source>Kazakh (Kazakhstan)</source>
      <translation>Казахский (Казахстан)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="854"/>
      <source>Kurmanji</source>
      <translation>Курманджи</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="855"/>
      <source>Kurmanji {Latin-alphabet Kurdish}</source>
      <translation>Курманджи {Latin-alphabet Kurdish}</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="856"/>
      <source>Korean</source>
      <translation>Корейский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="857"/>
      <source>Korean (South Korea)</source>
      <translation>Корейский (Южная Корея)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="858"/>
      <source>Kurdish</source>
      <translation>Курдский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="859"/>
      <source>Kurdish (Syria)</source>
      <translation>Курдский (Сирия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="860"/>
      <source>Kurdish (Turkey)</source>
      <translation>Курдский (Турция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="861"/>
      <source>Lao</source>
      <translation>Лаосский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="862"/>
      <source>Lao (Laos)</source>
      <translation>Лаосский (Лаос)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="863"/>
      <source>Lithuanian</source>
      <translation>Литовский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="864"/>
      <source>Lithuanian (Lithuania)</source>
      <translation>Литовский (Литва)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="865"/>
      <source>Malayalam</source>
      <translation>Малаялам</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="866"/>
      <source>Malayalam (India)</source>
      <translation>Малаялам (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="867"/>
      <source>Norwegian Bokmål</source>
      <translation>Норвежский букмол</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="868"/>
      <source>Norwegian Bokmål (Norway)</source>
      <translation>Норвежский букмол (Норвегия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="869"/>
      <source>Nepali</source>
      <translation>Непальский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="870"/>
      <source>Nepali (Nepal)</source>
      <translation>Непальский (Непал)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="871"/>
      <source>Dutch</source>
      <translation>Голландский (Dutch)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="872"/>
      <source>Dutch (Netherlands Antilles)</source>
      <translation>Голландский (Нидерландские Антильские острова)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="873"/>
      <source>Dutch (Aruba)</source>
      <translation>Голландский (Аруба)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="874"/>
      <source>Dutch (Belgium)</source>
      <translation>Голландский (Бельгия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="875"/>
      <source>Dutch (Netherlands)</source>
      <translation>Голландский (Нидерланды)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="876"/>
      <source>Dutch (Suriname)</source>
      <translation>Голландский (Суринам)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="877"/>
      <source>Norwegian Nynorsk</source>
      <translation>Норвежский Нюнорск</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="878"/>
      <source>Norwegian Nynorsk (Norway)</source>
      <translation>Норвежский Нюнорск (Норвегия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="879"/>
      <source>Occitan</source>
      <translation>Окситанский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="880"/>
      <source>Occitan (France)</source>
      <translation>Окситанский (Франция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="881"/>
      <source>Polish</source>
      <translation>Польский (Polish)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="882"/>
      <source>Polish (Poland)</source>
      <translation>Польский (Польша)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="883"/>
      <source>Portuguese</source>
      <translation>Португальский (Portuguese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="884"/>
      <source>Portuguese (Brazil)</source>
      <translation>Португальский (Бразилия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="885"/>
      <source>Portuguese (Portugal)</source>
      <translation>Португальский (Португалия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="886"/>
      <source>Romanian</source>
      <translation>Румынский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="887"/>
      <source>Romanian (Romania)</source>
      <translation>Румынский (Румыния)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="888"/>
      <source>Russian</source>
      <translation>Русский (Russian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="889"/>
      <source>Russian (Russia)</source>
      <translation>Русский (Россия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="890"/>
      <source>Northern Sami</source>
      <translation>Северносаамский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="891"/>
      <source>Northern Sami (Finland)</source>
      <translation>Северносаамский (Финляндия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="892"/>
      <source>Northern Sami (Norway)</source>
      <translation>Северносаамский (Норвегия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="893"/>
      <source>Northern Sami (Sweden)</source>
      <translation>Северносаамский (Швеция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="894"/>
      <source>Shtokavian</source>
      <comment>This code seems to be the identifier for the prestige dialect for several languages used in the region of the former Yugoslavia state without a state indication</comment>
      <translation>Штокавианский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="895"/>
      <source>Shtokavian (former state of Yugoslavia)</source>
      <comment>This code seems to be the identifier for the prestige dialect for several languages used in the region of the former Yugoslavia state with a (withdrawn from ISO 3166) state indication</comment>
      <translation>Штокавианский (бывшее государство Югославии)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="896"/>
      <source>Sinhala</source>
      <translation>Сингальский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="897"/>
      <source>Sinhala (Sri Lanka)</source>
      <translation>Сингальский (Шри-Ланка)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="898"/>
      <source>Slovak</source>
      <translation>Словацкий</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="899"/>
      <source>Slovak (Slovakia)</source>
      <translation>Словацкий (Словакия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="900"/>
      <source>Slovenian</source>
      <translation>Словенский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="901"/>
      <source>Slovenian (Slovenia)</source>
      <translation>Словенский (Словения)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="902"/>
      <source>Somali</source>
      <translation>Сомалийский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="903"/>
      <source>Somali (Somalia)</source>
      <translation>Сомалийский (Сомали)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="904"/>
      <source>Albanian</source>
      <translation>Албанский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="905"/>
      <source>Albanian (Albania)</source>
      <translation>Албанский (Албания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="906"/>
      <source>Serbian</source>
      <translation>Сербский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="907"/>
      <source>Serbian (Montenegro)</source>
      <translation>Сербский (Черногория)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="908"/>
      <source>Serbian (Serbia)</source>
      <translation>Сербский (Сербия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="909"/>
      <source>Serbian (Serbia - Latin-alphabet)</source>
      <translation>Сербии (Сербия - латинский алфавит)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="910"/>
      <source>Serbian (former state of Yugoslavia)</source>
      <translation>Сербский (бывшее государство Югославия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="911"/>
      <source>Swati</source>
      <translation>Свати</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="912"/>
      <source>Swati (Swaziland)</source>
      <translation>Свати (Свазиленд)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="913"/>
      <source>Swati (South Africa)</source>
      <translation>Свати (Южная Африка)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="914"/>
      <source>Swedish</source>
      <translation>Шведский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="915"/>
      <source>Swedish (Sweden)</source>
      <translation>Шведский (Швеция)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="916"/>
      <source>Swedish (Finland)</source>
      <translation>Шведский (Финляндия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="917"/>
      <source>Swahili</source>
      <translation>Суахили</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="918"/>
      <source>Swahili (Kenya)</source>
      <translation>Суахили (Кения)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="919"/>
      <source>Swahili (Tanzania)</source>
      <translation>Суахили (Танзания)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="920"/>
      <source>Turkish</source>
      <translation>Турецкий</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="921"/>
      <source>Telugu</source>
      <translation>Телугу</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="922"/>
      <source>Telugu (India)</source>
      <translation>Телугу (Индия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="923"/>
      <source>Thai</source>
      <translation>Тайский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="924"/>
      <source>Thai (Thailand)</source>
      <translation>Тайский (Таиланд)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="925"/>
      <source>Tigrinya</source>
      <translation>Тигринья</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="926"/>
      <source>Tigrinya (Eritrea)</source>
      <translation>Тигринья (Эритрея)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="927"/>
      <source>Tigrinya (Ethiopia)</source>
      <translation>Тигринья (Эфиопия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="928"/>
      <source>Turkmen</source>
      <translation>Туркменский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="929"/>
      <source>Turkmen (Turkmenistan)</source>
      <translation>Туркменский (Туркменистан)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="930"/>
      <source>Tswana</source>
      <translation>Тсвана</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="931"/>
      <source>Tswana (Botswana)</source>
      <translation>Тсвана (Ботсвана)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="932"/>
      <source>Tswana (South Africa)</source>
      <translation>Тсвана (Южная Африка)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="933"/>
      <source>Tsonga</source>
      <translation>Цонга</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="934"/>
      <source>Tsonga (South Africa)</source>
      <translation>Цонга (Южная Африка)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="935"/>
      <source>Ukrainian</source>
      <translation>Украинский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="936"/>
      <source>Ukrainian (Ukraine)</source>
      <translation>Украинский (Украина)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="937"/>
      <source>Uzbek</source>
      <translation>Узбекский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="938"/>
      <source>Uzbek (Uzbekistan)</source>
      <translation>Узбекский (Узбекистан)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="939"/>
      <source>Venda</source>
      <translation>Венда</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="940"/>
      <source>Vietnamese</source>
      <translation>Вьетнамский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="941"/>
      <source>Vietnamese (Vietnam)</source>
      <translation>Вьетнамский (Вьетнам)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="942"/>
      <source>Vietnamese (DauCu varient - old-style diacritics)</source>
      <translation>Вьетнамский (DauCu Varient - старостильная диакритика)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="943"/>
      <source>Vietnamese (DauMoi varient - new-style diacritics)</source>
      <translation>Вьетнамский (DauMoi вариант - новый-стиль диакритики)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="944"/>
      <source>Walloon</source>
      <translation>Валлонский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="945"/>
      <source>Xhosa</source>
      <translation>Хоса</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="946"/>
      <source>Yiddish</source>
      <translation>Идиш</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="947"/>
      <source>Chinese</source>
      <translation>Китайский (Chinese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="948"/>
      <source>Chinese (China - simplified)</source>
      <translation>Китайский (Китай - упрощенный)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="949"/>
      <source>Chinese (Taiwan - traditional)</source>
      <translation>Китайский (Тайвань - традиционный)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="950"/>
      <source>Zulu</source>
      <translation>Зулу</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="4345"/>
      <source>Hide tray icon</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="4350"/>
      <source>Quit Mudlet</source>
      <translation>Выйти из Mudlet</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="236"/>
      <source>hh:mm:ss</source>
      <comment>Formatting string for elapsed time display in replay playback - see QDateTime::toString(const QString&amp;) for the gory details...!</comment>
      <translation>чч:мм:сс</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="287"/>
      <source>Main Toolbar</source>
      <translation>Главная панель</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="328"/>
      <location filename="../src/mudlet.cpp" line="335"/>
      <location filename="../src/mudlet.cpp" line="337"/>
      <source>Connect</source>
      <translation>Подключится</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="340"/>
      <source>Disconnect</source>
      <translation>Отключиться</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="399"/>
      <source>Open Discord</source>
      <translation>Открыть Discord</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="404"/>
      <source>Open IRC</source>
      <translation>Открыть IRC</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="456"/>
      <source>Package Exporter</source>
      <translation>Экспортер пакетов</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="347"/>
      <source>Triggers</source>
      <translation>Триггеры</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="348"/>
      <source>Show and edit triggers</source>
      <translation>Показать и редактировать триггеры</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="355"/>
      <source>Aliases</source>
      <translation>Алиасы</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="356"/>
      <source>Show and edit aliases</source>
      <translation>Показать и редактировать алиасы</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="361"/>
      <source>Timers</source>
      <translation>Таймеры</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="362"/>
      <source>Show and edit timers</source>
      <translation>Показать и редактировать таймеры</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="367"/>
      <source>Buttons</source>
      <translation>Кнопки</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="368"/>
      <source>Show and edit easy buttons</source>
      <translation>Показать и редактировать кнопки</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="373"/>
      <source>Scripts</source>
      <translation>Скрипты</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="374"/>
      <source>Show and edit scripts</source>
      <translation>Показать и редактировать скрипты</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="379"/>
      <source>Keys</source>
      <translation>Ключи</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="380"/>
      <source>Show and edit keys</source>
      <translation>Показать и редактировать ключи</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="385"/>
      <source>Variables</source>
      <translation>Переменные</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="386"/>
      <source>Show and edit Lua variables</source>
      <translation>Показать и редактировать переменные</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="412"/>
      <source>Map</source>
      <translation>Карта</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="413"/>
      <source>Show/hide the map</source>
      <translation>Показать/скрыть карту</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="418"/>
      <source>Manual</source>
      <translation>Руководство</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="419"/>
      <source>Browse reference material and documentation</source>
      <translation>Просмотреть справочные материалы и документацию</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="424"/>
      <source>Settings</source>
      <translation>Настройки</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="425"/>
      <source>See and edit profile preferences</source>
      <translation>Редактировать параметры профиля</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="433"/>
      <source>Notepad</source>
      <translation>Блокнот</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="434"/>
      <source>Open a notepad that you can store your notes in</source>
      <translation>Откройте блокнот, в котором можно хранить заметки</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="440"/>
      <location filename="../src/mudlet.cpp" line="447"/>
      <location filename="../src/mudlet.cpp" line="449"/>
      <source>Package Manager</source>
      <translation>Управление пакетами</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="452"/>
      <source>Module Manager</source>
      <translation>Управление модулями</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="466"/>
      <source>Replay</source>
      <translation>Повтор</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="471"/>
      <source>Reconnect</source>
      <translation>Переподключиться</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="472"/>
      <source>Disconnects you from the game and connects once again</source>
      <translation>Отключает вас от игры и снова соединяется</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="477"/>
      <source>MultiView</source>
      <translation>Мульти-обзор</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="501"/>
      <location filename="../src/mudlet.cpp" line="3468"/>
      <source>About</source>
      <translation>О программе</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="502"/>
      <location filename="../src/mudlet.cpp" line="3451"/>
      <source>&lt;p&gt;Inform yourself about this version of Mudlet, the people who made it and the licence under which you can share it.&lt;/p&gt;</source>
      <comment>Tooltip for About Mudlet sub-menu item and main toolbar button (or menu item if an update has changed that control to have a popup menu instead) (Used in 3 places - please ensure all have the same translation).</comment>
      <translation>&lt;p&gt;Информируйте себя об этой версии Mudlet, людей, которые сделали его и лицензии, под которой вы можете поделиться им.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="952"/>
      <source>ASCII (Basic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ASCII (базовый)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="953"/>
      <source>UTF-8 (Recommended)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>UTF-8 (рекомендуется)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="958"/>
      <source>ISO 8859-1 (Western European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO-8859-1 - Западноевропейский</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="959"/>
      <source>ISO 8859-2 (Central European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-2 (Центральная Европа/Central European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="960"/>
      <source>ISO 8859-3 (South European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-3 (Южноевропейский / South European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="961"/>
      <source>ISO 8859-4 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-4 (Балтика / Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="962"/>
      <source>ISO 8859-5 (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-5 (Кириллица / Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="963"/>
      <source>ISO 8859-6 (Arabic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-6 (Арабский / Arabic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="964"/>
      <source>ISO 8859-7 (Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-7 (Греческий / Greek)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="965"/>
      <source>ISO 8859-8 (Hebrew Visual)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-8 (Иврит / Hebrew Visual)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="966"/>
      <source>ISO 8859-9 (Turkish)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-9 (Турецкий / Turkish)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="967"/>
      <source>ISO 8859-10 (Nordic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-10 (Скандинавские языки / Nordic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="968"/>
      <source>ISO 8859-11 (Latin/Thai)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-11 (Тайский / Latin/Thai)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="969"/>
      <source>ISO 8859-13 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-13 (Балтийские языки / Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="970"/>
      <source>ISO 8859-14 (Celtic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-14 (Кельтский / Celtic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="971"/>
      <source>ISO 8859-15 (Western)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-15 (Западные языки / Western)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="972"/>
      <source>ISO 8859-16 (Romanian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>ISO 8859-16 (Румынский / Romanian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="973"/>
      <location filename="../src/mudlet.cpp" line="974"/>
      <source>CP437 (OEM Font)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP437 (Шрифт OEM)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="975"/>
      <location filename="../src/mudlet.cpp" line="976"/>
      <source>CP667 (Mazovia)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP667 (Мазовия)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="977"/>
      <location filename="../src/mudlet.cpp" line="978"/>
      <source>CP737 (DOS Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP737 (DOS греческий)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="979"/>
      <source>CP850 (Western Europe)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP850 (Западная Европа / Western Europe)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="980"/>
      <source>CP866 (Cyrillic/Russian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP866 (Kириллица, Rусский / Cyrillic, Russian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="981"/>
      <location filename="../src/mudlet.cpp" line="982"/>
      <source>CP869 (DOS Greek 2)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP869 (DOS греческий 2)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="983"/>
      <source>CP1161 (Latin/Thai)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>CP1161 (Латинский/Тайландский)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="984"/>
      <source>KOI8-R (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>KOI8-R (Кириллица / Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="985"/>
      <source>KOI8-U (Cyrillic/Ukrainian)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>KOI8-U (Kириллица, Украинский / Cyrillic, Ukrainian)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="986"/>
      <source>MACINTOSH</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>MACINTOSH</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="987"/>
      <source>WINDOWS-1250 (Central European)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>Windows-1250 (Центральная Европа/Central European)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="988"/>
      <source>WINDOWS-1251 (Cyrillic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1251 (Кириллица / Cyrillic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="989"/>
      <source>WINDOWS-1252 (Western)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1252 (Западные языки / Western)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="990"/>
      <source>WINDOWS-1253 (Greek)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1253 (Греческий / Greek)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="991"/>
      <source>WINDOWS-1254 (Turkish)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1254 (Турецкий)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="992"/>
      <source>WINDOWS-1255 (Hebrew)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1255 (Иврит)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="993"/>
      <source>WINDOWS-1256 (Arabic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1256 (Арабский / Arabic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="994"/>
      <source>WINDOWS-1257 (Baltic)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1257 (Прибалтика / Baltic)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="995"/>
      <source>WINDOWS-1258 (Vietnamese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>WINDOWS-1258 (Вьетнамский / Vietnamese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2508"/>
      <source>Central Debug Console</source>
      <translation>Консоль отладки</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="513"/>
      <location filename="../src/mudlet.cpp" line="514"/>
      <source>Toggle Full Screen View</source>
      <translation>Переключить в полноэкранный режим</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="494"/>
      <source>The public test build gets newer features to you quicker, and you help us find issues in them quicker. Spotted something odd? Let us know asap!</source>
      <translation>Общедоступная тестовая сборка быстрее предоставляет вам новые возможности, и вы помогаете нам быстрее находить в них проблемы. Замели что-то странное? Сообщите нам как можно скорее!</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="954"/>
      <source>GBK (Chinese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>GBK (Китайский/Chinese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="955"/>
      <source>GB18030 (Chinese)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>GBK (Китайский/Chinese)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="956"/>
      <source>Big5-ETen (Taiwan)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>Big5-ETen (Тайвань)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="957"/>
      <source>Big5-HKSCS (Hong Kong)</source>
      <comment>Keep the English translation intact, so if a user accidentally changes to a language they don&apos;t understand, they can change back e.g. ISO 8859-2 (Центральная Европа/Central European)</comment>
      <translation>Big5-HKSCS (Гонконг)</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1552"/>
      <source>&lt;p&gt;Load a Mudlet replay.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Disabled until a profile is loaded.&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt;Загрузить просмотр Mudlet.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Отключено до загрузки профиля.&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="1588"/>
      <location filename="../src/mudlet.cpp" line="2879"/>
      <source>&lt;p&gt;Load a Mudlet replay.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Загрузить повтор лога&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2311"/>
      <source>%1 - notes</source>
      <translation>%1 - блокнот</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2364"/>
      <source>Select Replay</source>
      <translation>Выбрать повтор</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2366"/>
      <source>*.dat</source>
      <translation>*.dat</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2646"/>
      <source>[  OK  ]  - Profile &quot;%1&quot; loaded in offline mode.</source>
      <translation>[  OK  ]  - Профиль &quot;%1&quot; загружен в оффлайн режиме.</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2781"/>
      <source>&lt;p&gt;Cannot load a replay as one is already in progress in this or another profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Не удается загрузить повтор, поскольку оно уже выполняется в этом или ином профиле.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2798"/>
      <source>Faster</source>
      <translation>Быстрее</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2801"/>
      <source>&lt;p&gt;Replay each step with a shorter time interval between steps.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Воспроизвести каждый шаг с менее длинным интервалом между шагами.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2805"/>
      <source>Slower</source>
      <translation>Медленнее</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2808"/>
      <source>&lt;p&gt;Replay each step with a longer time interval between steps.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Воспроизвести каждый шаг с более длинным интервалом между шагами.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2818"/>
      <location filename="../src/mudlet.cpp" line="2887"/>
      <location filename="../src/mudlet.cpp" line="2900"/>
      <source>Speed: X%1</source>
      <translation>Скорость: Х%1</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="2825"/>
      <location filename="../src/mudlet.cpp" line="2842"/>
      <source>Time: %1</source>
      <translation>Время: %1</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3462"/>
      <source>&lt;p&gt;About Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n update(s) is/are now available!&lt;/i&gt;&lt;p&gt;</source>
      <comment>This is the tooltip text for the &apos;About&apos; Mudlet main toolbar button when it has been changed by adding a menu which now contains the original &apos;About Mudlet&apos; action and a new one to access the manual update process</comment>
      <translation>
        <numerusform>&lt;p&gt;О Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n обновление теперь доступно!&lt;/i&gt;&lt;p&gt;</numerusform>
        <numerusform>&lt;p&gt;О Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n обновлений теперь доступно!&lt;/i&gt;&lt;p&gt;</numerusform>
        <numerusform>&lt;p&gt;О Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n обновлений теперь доступно!&lt;/i&gt;&lt;p&gt;</numerusform>
        <numerusform>&lt;p&gt;О Mudlet&lt;/p&gt;&lt;p&gt;&lt;i&gt;%n обновлений теперь доступно!&lt;/i&gt;&lt;p&gt;</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3480"/>
      <source>Review %n update(s)...</source>
      <comment>Review update(s) menu item, %n is the count of how many updates are available</comment>
      <translation>
        <numerusform>Проверить %n обновление/й...</numerusform>
        <numerusform>Проверить %n обновление/й...</numerusform>
        <numerusform>Проверить %n обновление/й...</numerusform>
        <numerusform>Проверить %n обновление/й...</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/mudlet.cpp" line="3485"/>
      <source>&lt;p&gt;Review the update(s) available...&lt;/p&gt;</source>
      <comment>Tool-tip for review update(s) menu item, given that the count of how many updates are available is already shown in the menu, the %n parameter that is that number need not be used here</comment>
      <translation>
        <numerusform>&lt;p&gt;Проверить доступные обновления...&lt;/p&gt;</numerusform>
        <numerusform>&lt;p&gt;Проверить доступные обновления...&lt;/p&gt;</numerusform>
        <numerusform>&lt;p&gt;Проверить доступные обновления...&lt;/p&gt;</numerusform>
        <numerusform>&lt;p&gt;Проверить доступные обновления...&lt;/p&gt;</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="3510"/>
      <source>Update installed - restart to apply</source>
      <translation>Обновление установлено - перезапустите приложение</translation>
    </message>
    <message>
      <location filename="../src/mudlet.cpp" line="3546"/>
      <source>[ WARN ]  - Cannot perform replay, another one may already be in progress,
try again when it has finished.</source>
      <translation>[ ВНИМ ] - Невозможно выполнить повтор, возможно, уже выполняется другой.
Повторите попытку, когда он будет завершен.</translation>
    </message>
  </context>
  <context>
    <name>package_manager</name>
    <message>
      <location filename="../src/ui/package_manager.ui" line="122"/>
      <source>Details</source>
      <translation>Детали</translation>
    </message>
    <message>
      <location filename="../src/ui/package_manager.ui" line="203"/>
      <source>Install new package</source>
      <translation>Установить новый пакет</translation>
    </message>
    <message>
      <location filename="../src/ui/package_manager.ui" line="219"/>
      <source>Remove packages</source>
      <translation>Удалить пакеты</translation>
    </message>
  </context>
  <context>
    <name>package_manager_unpack</name>
    <message>
      <location filename="../src/ui/package_manager_unpack.ui" line="24"/>
      <source>unpacking please wait ...</source>
      <translation>распаковка, пожалуйста подождите...</translation>
    </message>
  </context>
  <context>
    <name>profile_preferences</name>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="20"/>
      <source>Profile preferences</source>
      <translation>Настройки профиля</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="55"/>
      <source>General</source>
      <translation>Общее</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="61"/>
      <source>Icon sizes</source>
      <translation>Размер значков</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="67"/>
      <source>Icon size toolbars:</source>
      <translation>Размер значков на панели инструментов:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="90"/>
      <source>Icon size in tree views:</source>
      <translation>Размер значков в списках:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="110"/>
      <source>Show menu bar:</source>
      <translation>Показывать меню:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="121"/>
      <location filename="../src/ui/profile_preferences.ui" line="150"/>
      <source>Never</source>
      <translation>Никогда</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="126"/>
      <location filename="../src/ui/profile_preferences.ui" line="155"/>
      <source>Until a profile is loaded</source>
      <translation>До загрузки профиля</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="131"/>
      <location filename="../src/ui/profile_preferences.ui" line="160"/>
      <source>Always</source>
      <translation>Всегда</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="139"/>
      <source>Show main toolbar</source>
      <translation>Показать панель инструментов</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="239"/>
      <source>Allow server to install script packages</source>
      <translation>Разрешить серверу автоматическую установку пакетов скриптов</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="266"/>
      <source>Game protocols</source>
      <translation>Протоколы игр</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="323"/>
      <location filename="../src/ui/profile_preferences.ui" line="3306"/>
      <source>Please reconnect to your game for the change to take effect</source>
      <translation>Пожалуйста, переподключитесь к вашей игре, чтобы изменения вступили в силу</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="339"/>
      <source>Log options</source>
      <translation>Параметры журнала</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="348"/>
      <source>Save log files in HTML format instead of plain text</source>
      <translation>Сохранять лог-файлы в формате HTML вместо простого текста</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="355"/>
      <source>Add timestamps at the beginning of log lines</source>
      <translation>Добавить метки в начале строк журнала</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="362"/>
      <source>Save log files in:</source>
      <translation>Сохранить в:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="379"/>
      <source>Browse...</source>
      <translation>Обзор...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="386"/>
      <source>Reset</source>
      <translation>Сброс</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="393"/>
      <source>Log format:</source>
      <translation>Формат:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="406"/>
      <source>Log name:</source>
      <translation>Имя журнала:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="426"/>
      <source>.txt</source>
      <translation>.txt</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="459"/>
      <source>Input line</source>
      <translation>Строка ввода</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="468"/>
      <source>Input</source>
      <translation>Ввод</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="474"/>
      <source>use strict UNIX line endings on commands for old UNIX servers that can&apos;t handle windows line endings correctly</source>
      <translation>использовать только окончания строк в стиле UNIX для команд к старыи серверам, которые не могут правильно обрабатывать окончания строк в стиле Windows</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="477"/>
      <source>Strict UNIX line endings</source>
      <translation>Оканчивать строки с стиле UNIX</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="494"/>
      <source>Show the text you sent</source>
      <translation>Показывать текст, который вы отправили</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="484"/>
      <source>Auto clear the input line after you sent text</source>
      <translation>Очищать поле ввода после отправки текста</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="201"/>
      <source>&lt;p&gt;If you are playing a non-English game and seeing � instead of text, or special letters like &lt;span style=&quot; font-weight:600;&quot;&gt;ñ&lt;/span&gt; aren&apos;t showing right - try changing the encoding to UTF-8 or to one suggested by your game.&lt;/p&gt;&lt;p&gt;For some encodings on some Operating Systems Mudlet itself has to provide the codec needed; if that is the case for this Mudlet then there will be a &lt;tt&gt;m &lt;/tt&gt; prefixed applied to those encoding names (so if they have errors the blame can be applied correctly!)&lt;/p&gt;</source>
      <translation>&lt;p&gt;Если вы играете в не англоязычную игру и видите � вместо текста или специальных букв типа &lt;span style=&quot; font-weight:600;&quot;&gt;ñ&lt;/span&gt; aren&apos;t - попробуйте изменить кодировку на UTF-8 или на ту, которую предлагает ваша игра.&lt;/p&gt;&lt;p&gt;Для некоторых кодировок на некоторых операционных системах сам Mudlet должен предоставлять нужный кодек; если это так, то к этим именам кодировок будет применен префикс &lt;tt&gt;m &lt;/tt&gt; (так что если у них есть ошибки, то вина может быть адресована верно!)&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="302"/>
      <source>&lt;p&gt;Enables MSP - provides Mud Sound Protocol messages during game play for supported games&lt;/p&gt;</source>
      <translation>&lt;p&gt;Включает MSP - предоставляет сообщения протокола Mud Sound во время игры для игр которые поддерживают протокол&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="345"/>
      <source>&lt;p&gt;When checked will cause the date-stamp named log file to be HTML (file extension &apos;.html&apos;) which can convey color, font and other formatting information rather than a plain text (file extension &apos;.txt&apos;) format.  If changed while logging is already in progress it is necessary to stop and restart logging for this setting to take effect in a new log file.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Если эта опция выбрана, то формат файла журнала будет HTML (&apos;.html&apos;) который может передавать цвет, шрифт и другую информацию о форматировании, а не только обычный текст (ето расширение файла &apos;.txt&apos;).  Если опция изменена, пока запись в журнал уже открыт, необходимо остановить и перезапустить запись в журнал, чтобы этот параметр вступили в силу в новом формате журнала.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="514"/>
      <source>React to all keybindings on the same key</source>
      <translation>Реагировать на все сочетания клавиш на одном и том же ключе</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="524"/>
      <source>Command separator:</source>
      <translation>Разделитель команд:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="534"/>
      <source>Enter text to separate commands with or leave blank to disable</source>
      <translation>Введите текст для разделения команд или оставьте пустым, чтобы отключить</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="541"/>
      <source>Command line minimum height in pixels:</source>
      <translation>Минимальная высота командной строки в пикселях:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="663"/>
      <source>Main display</source>
      <translation>Главная панель</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="675"/>
      <source>Font</source>
      <translation>Шрифт</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="681"/>
      <source>Font:</source>
      <translation>Шрифт:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="704"/>
      <source>Size:</source>
      <translation>Размер:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="726"/>
      <source>Use anti aliasing on fonts. Smoothes fonts if you have a high screen resolution and you can use larger fonts. Note that on low resolutions and small font sizes, the font gets blurry. </source>
      <translation>Используйте сглаживание шрифтов. Сглаживает шрифты, если у вас высокое разрешение экрана, и вы можете использовать более крупные шрифты. Обратите внимание, что при низком разрешении и небольших размерах шрифта шрифт становится размытым. </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="729"/>
      <source>Enable anti-aliasing</source>
      <translation>Включить сглаживание</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="758"/>
      <source>Display Border</source>
      <translation>Граница дисплея</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="779"/>
      <source>Top border height:</source>
      <translation>Высота верхней границы:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="823"/>
      <source>Left border width:</source>
      <translation>Ширина левой границы:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="867"/>
      <source>Bottom border height:</source>
      <translation>Высота нижней границы:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="911"/>
      <source>Right border width:</source>
      <translation>Ширина правой границы:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="952"/>
      <source>Word wrapping</source>
      <translation>Перенос слов</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="976"/>
      <source>Wrap lines at:</source>
      <translation>Перенос:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="996"/>
      <location filename="../src/ui/profile_preferences.ui" line="1044"/>
      <source>characters</source>
      <translation>символов</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1024"/>
      <source>Indent wrapped lines by:</source>
      <translation>Отступ завернутых строк:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1057"/>
      <source>Double-click</source>
      <translation>Двойной клик</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1063"/>
      <source>Stop selecting a word on these characters:</source>
      <translation>Остановить выбор слова на этих буквах:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1073"/>
      <source>&apos;&quot;</source>
      <translation>&apos;&quot;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1086"/>
      <source>Display options</source>
      <translation>Графические настройки</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1095"/>
      <source>Fix unnecessary linebreaks on GA servers</source>
      <translation>Исправить ненужные переносы строк на серверах с GA</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1105"/>
      <source>Show Spaces/Tabs</source>
      <translation>Показывать пробелы/табы</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1115"/>
      <source>Use Mudlet on a netbook with a small screen</source>
      <translation>Использовать Mudlet на нетбуке с маленьким экраном</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1125"/>
      <source>Show Line/Paragraphs</source>
      <translation>Показывать строки/абзацы</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1135"/>
      <source>Echo Lua errors to the main console</source>
      <translation>Показывать ошибки Lua на главном консоле</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1142"/>
      <source>Make &apos;Ambiguous&apos; E. Asian width characters wide</source>
      <translation>Make &apos;Ambiguous&apos; E. Asian width characters wide</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1176"/>
      <source>Editor</source>
      <translation>Редактор</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1182"/>
      <source>Theme</source>
      <translation>Тема</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1252"/>
      <source>Updating themes from colorsublime.github.io...</source>
      <translation>Обновление тем от colorsublime.github.io...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1292"/>
      <source>Color view</source>
      <translation>Цвета</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1298"/>
      <source>Select your color preferences</source>
      <translation>Выберите свои цветовые предпочтения</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1304"/>
      <source>Foreground:</source>
      <translation>Передний план:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1327"/>
      <source>Background:</source>
      <translation>Задний план:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1347"/>
      <source>Command line foreground:</source>
      <translation>Передний план строки ввода:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1364"/>
      <source>Command line background:</source>
      <translation>Задний план строки ввода:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1381"/>
      <source>Command foreground:</source>
      <translation>Передний план команд:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1401"/>
      <source>Command background:</source>
      <translation>Задний план команд:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="272"/>
      <source>&lt;p&gt;Enables GMCP - note that if you have MSDP enabled as well, some servers will prefer one over the other&lt;/p&gt;</source>
      <translation>&lt;p&gt;Включает GMCP - обратите внимание, что если у вас также включен MSDP, некоторые серверы предпочитают один по сравнению с другим&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="292"/>
      <source>&lt;p&gt;Enables MSDP - note that if you have GMCP enabled as well, some servers will prefer one over the other&lt;/p&gt;</source>
      <translation>&lt;p&gt;Включает MSDP - обратите внимание, что если у вас также включен GMCP, некоторые серверы предпочитают один по сравнению с другим&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="171"/>
      <source>Language &amp;&amp; data encoding</source>
      <translation>Язык &amp;&amp; кодирование данных</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="177"/>
      <source>Interface language:</source>
      <translation>Язык интерфейса:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="191"/>
      <source>Server data encoding:</source>
      <translation>Кодировка сервера:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="213"/>
      <source>Please restart Mudlet to apply the new language</source>
      <translation>Для изменения языка, пожалуйста, перезапустите приложение</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="223"/>
      <source>Miscellaneous</source>
      <translation>Прочие</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="275"/>
      <source>Enable GMCP  (Generic Mud Communication Protocol)</source>
      <translation>Включить GMCP (Generic Mud Communication Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="295"/>
      <source>Enable MSDP  (Mud Server Data Protocol)</source>
      <translation>Включить MSDP (Mud Server Data Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="282"/>
      <source>&lt;p&gt;Enables MSSP - provides Mud Server Status Protocol information upon connection for supported games&lt;/p&gt;</source>
      <translation>&lt;p&gt;Включает MSSP - предоставляет информацию о статусе сервера при подключении для поддерживаемых игр&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="285"/>
      <source>Enable MSSP  (Mud Server Status Protocol)</source>
      <translation>Включить MSSP (Mud Server Status Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="491"/>
      <source>&lt;p&gt;Echo the text you send in the display box.&lt;/p&gt;&lt;p&gt;&lt;i&gt;This can be disabled by the game server if it negotiates to use the telnet ECHO option&lt;/i&gt;&lt;/p&gt;</source>
      <translation>&lt;p&gt; Показывать текст который вы отправляете в окне дисплея.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Это может быть отключено игровым сервером, если он согласовывает использование опции telnet ECHO&lt;/i&gt;&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="511"/>
      <source>&lt;p&gt;Check all Key-bindings against key-presses.&lt;/p&gt;&lt;p&gt;&lt;i&gt;Versions of Mudlet prior to &lt;b&gt;3.9.0&lt;/b&gt; would stop checking after the first matching combination of&lt;/i&gt; KeyCode &lt;i&gt;and&lt;/i&gt; KeyModifier &lt;i&gt;was found and then send the command and/or run the script of that Key-binding only.  This&lt;/i&gt; per-profile &lt;i&gt;option tells Mudlet to check and run the remaining matches; but, to retain compatibility with previous versions, defaults to the &lt;b&gt;un&lt;/b&gt;-checked state.&lt;/i&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="567"/>
      <source>Spell checking</source>
      <translation>Проверка орфографии</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="573"/>
      <source>&lt;p&gt;This option controls spell-checking on the command line in the main console for this profile.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Эта опция управляет проверкой орфографии в командной строке главной консоля этого профайла.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="576"/>
      <source>System/Mudlet dictionary:</source>
      <translation>Словарь системы/Mudlet:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="583"/>
      <source>&lt;p&gt;Select one dictionary which will be available on the command line and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите один словарь, который будет доступен в командной строке и в подсистеме lua.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="611"/>
      <source>User dictionary:</source>
      <translation>Свой словарь:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="617"/>
      <source>&lt;p&gt;A user dictionary specific to this profile will be available. This will be on the command line (words which are in it will appear with a dashed cyan underline) and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Будет доступен пользовательский словарь, специфичный для этого профиля. Это будет на командной строке (слова, которые в нем, будут появляться с пунктирным голубым подчеркиванием) и в lua подсистеме.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="620"/>
      <source>Profile</source>
      <translation>Профиль</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="627"/>
      <source>&lt;p&gt;A user dictionary that is shared between all profiles (which have this option selected) will be available. This will be on the command line (words which are in it will appear with a dashed cyan underline) and in the lua sub-system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Будет доступен пользовательский словарь, совместно используемый всеми профилями у которых эта опция включена. Это будет на командной строке (слова, которые в нем, будут появляться с пунктирным голубым подчеркиванием) и в lua подсистеме.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="630"/>
      <source>Shared</source>
      <translation>Общий</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="719"/>
      <source>The selected font doesn&apos;t work with Mudlet, please pick another</source>
      <translation>Выбранный шрифт работает с Mudlet, пожалуйста, выберите другой</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="776"/>
      <location filename="../src/ui/profile_preferences.ui" line="792"/>
      <source>&lt;p&gt;Extra space to have before text on top - can be set to negative to move text up beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;Дополнительное пространство, чтобы иметь перед текстом сверху - оно может быть отрицательным, чтобы переместить текст вверх за экран&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="820"/>
      <location filename="../src/ui/profile_preferences.ui" line="836"/>
      <source>&lt;p&gt;Extra space to have before text on the left - can be set to negative to move text left beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;Дополнительное пространство, чтобы иметь перед текстом слева - оно может быть отрицательным, чтобы переместить текст за пределы экрана&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="864"/>
      <location filename="../src/ui/profile_preferences.ui" line="880"/>
      <source>&lt;p&gt;Extra space to have before text on the bottom - can be set to negative to allow text to go down beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;Дополнительное пространство, чтобы иметь перед текстом снизу - оно может быть отрицательным, чтобы переместить текст за пределы экрана&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="908"/>
      <location filename="../src/ui/profile_preferences.ui" line="924"/>
      <source>&lt;p&gt;Extra space to have before text on the right - can be set to negative to move text right beyond the screen&lt;/p&gt;</source>
      <translation>&lt;p&gt;Дополнительное пространство, чтобы иметь перед текстом справа - оно может быть отрицательным, чтобы переместить текст за пределы экрана&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1070"/>
      <source>&lt;p&gt;Enter the characters you&apos;d like double-clicking to stop selecting text on here. If you don&apos;t enter any, double-clicking on a word will only stop at a space, and will include characters like a double or a single quote. For example, double-clicking on the word &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt; in the following will select &lt;span style=&quot; font-style:italic;&quot;&gt;&amp;quot;&lt;/span&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Hello!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;You say, &lt;span style=&quot; font-weight:600;&quot;&gt;&amp;quot;Hello!&amp;quot;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;If you set the characters in the field to &lt;span style=&quot; font-weight:600;&quot;&gt;&apos;&amp;quot;! &lt;/span&gt;which will mean it should stop selecting on &apos; &lt;span style=&quot; font-style:italic;&quot;&gt;or&lt;/span&gt; &amp;quot; &lt;span style=&quot; font-style:italic;&quot;&gt;or&lt;/span&gt; ! then double-clicking on &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt; will just select &lt;span style=&quot; font-style:italic;&quot;&gt;Hello&lt;/span&gt;&lt;/p&gt;&lt;p&gt;You say, &amp;quot;&lt;span style=&quot; font-weight:600;&quot;&gt;Hello&lt;/span&gt;!&amp;quot;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1076"/>
      <source>(characters to ignore in selection, for example &apos; or &quot;)</source>
      <translation>(символы игнорировать при выборе, например &apos; или &quot;)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1092"/>
      <source>&lt;p&gt;Some games (notably all IRE MUDs) suffer from a bug where they don&apos;t properly communicate with the client on where a newline should be. Enable this to fix text from getting appended to the previous prompt line.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Некоторые игры (в частности, все IRE MUD) страдают от ошибки, когда&apos;t не корректно собщают клиенту, где должна быть новая строка. Включите эту опцию, чтобы исправить добавление текста к предыдущей строке запроса.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1102"/>
      <source>&lt;body&gt;&lt;p&gt;When displaying Lua contents in the main text editor area of the Editor show tabs and spaces with visible marks instead of whitespace.&lt;/p&gt;</source>
      <translation>&lt;body&gt;&lt;p&gt;При отображении содержимого Lua в области текстового редактора вместо пробелов отображаются символы табуляции и пробелы с видимыми метками.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1122"/>
      <source>&lt;body&gt;&lt;p&gt;When displaying Lua contents in the main text editor area of the Editor show  line and paragraphs ends with visible marks as well as whitespace.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1132"/>
      <source>&lt;p&gt;Prints Lua errors to the main console in addition to the error tab in the editor.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выводит ошибки Lua на главное окно в дополнение к закладке ошибок в редакторе.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1152"/>
      <source>Enable text analyzer</source>
      <translation>Включить анализатор текста</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3473"/>
      <source>h:mm:ss.zzz</source>
      <comment>Used to set a time interval only</comment>
      <translation>h:mm:ss.zzz</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1262"/>
      <source>Autocomplete</source>
      <translation>Автозаполнение</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="229"/>
      <source>Notify on new data</source>
      <translation>Уведомлять о новых сообщениях</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="232"/>
      <source>&lt;p&gt;Show a toolbar notification if Mudlet is minimized and new data arrives.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="246"/>
      <source>Auto save on exit</source>
      <translation>Авто-сохранение при выходе</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="253"/>
      <source>Allow server to download and play media</source>
      <translation>Разрешить серверу загружать и воспроизводить мультимедиа</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="256"/>
      <source>&lt;p&gt;This also needs GMCP to be enabled in the next group below.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Для этого также необходимо, чтобы GMCP был включен в следующей группе ниже.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="305"/>
      <source>Enable MSP  (Mud Sound Protocol)</source>
      <translation>Включить MSP (Mud Sound Protocol)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="501"/>
      <source>Highlights your input line text when scrolling through your history for easy cancellation</source>
      <translation>Выделять текст в строке ввода при использовании истории для удобного отмена</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="504"/>
      <source>Highlight history</source>
      <translation>Выделять историю</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="741"/>
      <source>This font is not monospace, which may not be ideal for playing some text games:
you can use it but there could be issues with aligning columns of text</source>
      <comment>Note that this text is split into two lines so that the message is not too wide in English, please do the same for other locales where the text is the same or longer</comment>
      <translation>Этот шрифт не является моноширинным, что может быть не идеальным для игры в некоторые текстовые игры: вы можете использовать его, но могут быть проблемы с выравнивание столбцов текста</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1112"/>
      <source>&lt;p&gt;Select this option for better compatibility if you are using a netbook, or some other computer model that has a small screen.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите этот параметр для лучшей совместимости, если используется нетбук или другая модель компьютера с небольшим экраном.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1268"/>
      <source>Autocomplete Lua functions in code editor</source>
      <translation>Автозаполнение Lua функций в редакторе кода</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1311"/>
      <source>&lt;p&gt;The foreground color used by default for the main console (unless changed by a lua command or the game server).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Цвет переднего плана, используемый по умолчанию для главного экрана (если не изменен командой lua или игровым сервером).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1334"/>
      <source>&lt;p&gt;The background color used by default for the main console (unless changed by a lua command or the game server).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Цвет заднего плана, используемый по умолчанию для главного экрана (если не изменен командой lua или игровым сервером).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1354"/>
      <source>&lt;p&gt;The foreground color used for the main input area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Цвет переднего плана для главной строки ввода.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1371"/>
      <source>&lt;p&gt;The background color used for the main input area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Цвет фона для главной строки ввода.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1388"/>
      <source>&lt;p&gt;The foreground color used for text sent to the game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Цвет переднего плана, используемый для текста, отправленного на игровой сервер.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1408"/>
      <source>&lt;p&gt;The background color used for text sent to the game server.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Цвет фона, используемый для текста, отправленного на игровой сервер.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1434"/>
      <source>These preferences set how you want a particular color to be represented visually in the main display:</source>
      <translation>Эти параметры показывают, каким образом определенный цвет должен быть представлен визуально в главном дисплее:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1444"/>
      <location filename="../src/ui/profile_preferences.ui" line="2262"/>
      <source>Black:</source>
      <translation>Чёрный:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1451"/>
      <source>ANSI Color Number 0</source>
      <translation>Цвет ANSI номер 0</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1464"/>
      <location filename="../src/ui/profile_preferences.ui" line="2279"/>
      <source>Light black:</source>
      <translation>Светло-черный:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1471"/>
      <source>ANSI Color Number 8</source>
      <translation>Цвет ANSI номер 8</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1484"/>
      <location filename="../src/ui/profile_preferences.ui" line="2296"/>
      <source>Red:</source>
      <translation>Красный:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1491"/>
      <source>ANSI Color Number 1</source>
      <translation>Цвет ANSI номер 1</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1504"/>
      <location filename="../src/ui/profile_preferences.ui" line="2313"/>
      <source>Light red:</source>
      <translation>Светло-красный:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1511"/>
      <source>ANSI Color Number 9</source>
      <translation>Цвет ANSI номер 9</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1524"/>
      <location filename="../src/ui/profile_preferences.ui" line="2330"/>
      <source>Green:</source>
      <translation>Зеленый:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1531"/>
      <source>ANSI Color Number 2</source>
      <translation>Цвет ANSI номер 2</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1544"/>
      <location filename="../src/ui/profile_preferences.ui" line="2347"/>
      <source>Light green:</source>
      <translation>Светло-зеленый:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1551"/>
      <source>ANSI Color Number 10</source>
      <translation>Цвет ANSI номер 10</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1564"/>
      <location filename="../src/ui/profile_preferences.ui" line="2364"/>
      <source>Yellow:</source>
      <translation>Желтый:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1571"/>
      <source>ANSI Color Number 3</source>
      <translation>Цвет ANSI номер 3</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1584"/>
      <location filename="../src/ui/profile_preferences.ui" line="2381"/>
      <source>Light yellow:</source>
      <translation>Светло-желтый:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1591"/>
      <source>ANSI Color Number 11</source>
      <translation>Цвет ANSI номер 11</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1604"/>
      <location filename="../src/ui/profile_preferences.ui" line="2398"/>
      <source>Blue:</source>
      <translation>Синий:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1611"/>
      <source>ANSI Color Number 4</source>
      <translation>Цвет ANSI номер 4</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1624"/>
      <location filename="../src/ui/profile_preferences.ui" line="2415"/>
      <source>Light blue:</source>
      <translation>Светло-голубой:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1631"/>
      <source>ANSI Color Number 12</source>
      <translation>Цвет ANSI номер 12</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1644"/>
      <location filename="../src/ui/profile_preferences.ui" line="2432"/>
      <source>Magenta:</source>
      <translation>Пурпурный:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1651"/>
      <source>ANSI Color Number 5</source>
      <translation>Цвет ANSI номер 5</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1664"/>
      <location filename="../src/ui/profile_preferences.ui" line="2449"/>
      <source>Light magenta:</source>
      <translation>Светло-пурпурный:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1671"/>
      <source>ANSI Color Number 13</source>
      <translation>Цвет ANSI номер 13</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1684"/>
      <location filename="../src/ui/profile_preferences.ui" line="2466"/>
      <source>Cyan:</source>
      <translation>Голубой:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1691"/>
      <source>ANSI Color Number 6</source>
      <translation>Цвет ANSI номер 6</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1704"/>
      <location filename="../src/ui/profile_preferences.ui" line="2483"/>
      <source>Light cyan:</source>
      <translation>Светло-голубой:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1711"/>
      <source>ANSI Color Number 14</source>
      <translation>Цвет ANSI номер 14</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1724"/>
      <location filename="../src/ui/profile_preferences.ui" line="2500"/>
      <source>White:</source>
      <translation>Белый:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1731"/>
      <source>ANSI Color Number 7</source>
      <translation>Цвет ANSI номер 7</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1744"/>
      <location filename="../src/ui/profile_preferences.ui" line="2517"/>
      <source>Light white:</source>
      <translation>Светло-белый:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1751"/>
      <source>ANSI Color Number 15</source>
      <translation>Цвет ANSI номер 15</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1764"/>
      <location filename="../src/ui/profile_preferences.ui" line="2534"/>
      <source>Reset all colors to default</source>
      <translation>Сбросить цвета по умолчанию</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1771"/>
      <source>&lt;p&gt;If this option is checked the Mud Server may send codes to change the above 16 colors or to reset them to their defaults by using standard ANSI &lt;tt&gt;OSC&lt;/tt&gt; Escape codes.&lt;/p&gt;&lt;p&gt;Specifically &lt;tt&gt;&amp;lt;OSC&amp;gt;Pirrggbb&amp;lt;ST&amp;gt;&lt;/tt&gt; will set the color with index &lt;i&gt;i&lt;/i&gt; to have the color with the given &lt;i&gt;rr&lt;/i&gt; red, &lt;i&gt;gg&lt;/i&gt; green and &lt;i&gt;bb&lt;/i&gt;  blue components where i is a single hex-digit (&apos;0&apos; to &apos;9&apos; or &apos;a&apos; to &apos;f&apos; or &apos;A&apos; to &apos;F&apos; to give a number between 0 an d15) and rr, gg and bb are two digit hex-digits numbers (between 0 to 255); &amp;lt;OSC&amp;gt; is &lt;i&gt;Operating System Command&lt;/i&gt; which is normally encoded as the ASCII &amp;lt;ESC&amp;gt; character followed by &lt;tt&gt;[&lt;/tt&gt; and &amp;lt;ST&amp;gt; is the &lt;i&gt;String Terminator&lt;/i&gt; which is normally encoded as the ASCII &amp;lt;ESC&amp;gt; character followed by &lt;tt&gt;\&lt;tt&gt;.&lt;/p&gt;&lt;p&gt;Conversely &lt;tt&gt;&amp;lt;OSC&amp;gt;R&amp;lt;ST&amp;gt;&lt;/tt&gt; will reset the colors to the defaults like the button to the right does.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1774"/>
      <source>Server allowed to redefine these colors</source>
      <translation>Сервер позволен переопределять эти цвета</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1798"/>
      <source>Mapper</source>
      <translation>Маппер</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1804"/>
      <source>Map files</source>
      <translation>Файлы карт</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1810"/>
      <source>Save your current map:</source>
      <translation>Сохранить текущую карту:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1820"/>
      <source>Press to choose location and save</source>
      <translation>Выбрать местоположение и сохранить</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1827"/>
      <source>Load another map file in:</source>
      <translation>Загрузить другую карту:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1837"/>
      <source>Press to choose file and load</source>
      <translation>Выбрать файл и загрузить</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1844"/>
      <source>&lt;p&gt;Mudlet now does some sanity checking and repairing to clean up issues that may have arisen in previous version due to faulty code or badly documented commands. However if significant problems are found the report can be quite extensive, in particular for larger maps.&lt;/p&gt;&lt;p&gt;Unless this option is set, Mudlet will reduce the amount of on-screen messages by hiding many texts and showing a suggestion to review the report file instead.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1928"/>
      <source>&lt;p&gt;Change this to a lower version if you need to save your map in a format that can be read by older versions of Mudlet. Doing so will lose the extra data available in the current map format&lt;/p&gt;</source>
      <translation>&lt;p&gt;Если вам нужно сохранить карту в формате, который может быть прочитан старыми версиями Mudlet, измените ее на более низкую версию. Это приведет к потере дополнительных данных, доступных в текущем формате карты&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1958"/>
      <source>Download latest map provided by your game:</source>
      <translation>Скачать новейшую карту, предоставленную игрой:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1987"/>
      <source>&lt;p&gt;This enables anti-aliasing (AA) for the 2D map view, making it look smoother and nicer. Disable this if you&apos;re on a very slow computer.&lt;/p&gt;&lt;p&gt;3D map view always has anti-aliasing enabled.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Это позволяет сглаживать (AA) для 2D вида карты, делая его более гладкой и приятной. Отключите это, если вы на очень медленном компьютере.&lt;/p&gt;&lt;p&gt;3D вид карты всегда имеет сглаживание.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1997"/>
      <source>&lt;p&gt;The default area (area id -1) is used by some mapper scripts as a temporary &apos;holding area&apos; for rooms before they&apos;re placed in the correct area&lt;/p&gt;</source>
      <translation>&lt;p&gt;Область по умолчанию (идентификатор области -1) используется некоторыми скриптами картографа (mapper) как временная &apos; &apos; для комнат до того, как они&apos;будут помещены в нужную область&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2049"/>
      <source>2D map player room marker style:</source>
      <translation>2D стиль маркера комнаты игрока на карте:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2059"/>
      <source>Outer ring color</source>
      <translation>Цвет внешнего кольца</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2069"/>
      <source>Inner ring color</source>
      <translation>Цвет внутреннего кольца</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2083"/>
      <source>Original</source>
      <translation>Оригинал</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2088"/>
      <source>Red ring</source>
      <translation>Красное кольцо</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2093"/>
      <source>Blue/Yellow ring</source>
      <translation>Синее/желтое кольцо</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2098"/>
      <source>Custom ring</source>
      <translation>Другое кольцо</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2106"/>
      <source>&lt;p&gt;Percentage ratio (&lt;i&gt;the default is 120%&lt;/i&gt;) of the marker symbol to the space available for the room.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2112"/>
      <location filename="../src/ui/profile_preferences.ui" line="2140"/>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2115"/>
      <source>Outer diameter: </source>
      <translation>Внешний диаметр: </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2134"/>
      <source>&lt;p&gt;Percentage ratio of the inner diameter of the marker symbol to the outer one (&lt;i&gt;the default is 70%&lt;/i&gt;).&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2143"/>
      <source>Inner diameter: </source>
      <translation>Внутренний диаметр: </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2159"/>
      <source>&lt;p&gt;This enables borders around room. Color can be set in Mapper colors tab&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2162"/>
      <source>Show room borders</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2238"/>
      <source>Room border color:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2558"/>
      <source>Chat</source>
      <translation>Чат</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3250"/>
      <source>Special options needed for some older game drivers (needs client restart to take effect)</source>
      <translation>Особые опции, необходимые для некоторых старых драйверов игр (требует перезапуск клиента)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3288"/>
      <source>Force CHARSET negotiation off</source>
      <translation>Выключить согласование CHARSET</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3390"/>
      <source>the computer&apos;s password manager (secure)</source>
      <translation>компьютерном менеджером паролей (безопасно)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3395"/>
      <source>plaintext with the profile (portable)</source>
      <translation>открытом текстом с профилем (портативно)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3486"/>
      <source>&lt;p&gt;If checked this will cause all problem Unicode codepoints to be reported in the debug output as they occur; if cleared then each different one will only be reported once and summarized in as a table when the console in which they occurred is finally destroyed (when the profile is closed).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Если отмечено то это приведет к тому, что все проблемы с кодовыми точками Unicode будут сообщаться в отладочном выводе по мере их возникновения; если они будут удалены, то о каждой различной кодовой точке будет сообщаться только один раз, и она будет обобщена в виде таблицы, когда консоль, в которой они возникли, будет окончательно уничтожена (когда профиль будет закрыт).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3372"/>
      <source>&lt;p&gt;Some MUDs use a flawed interpretation of the ANSI Set Graphics Rendition (&lt;b&gt;SGR&lt;/b&gt;) code sequences for 16M color mode which only uses semi-colons and not colons to separate parameter elements i.e. instead of using a code in the form: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38:2:&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Unused&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance&amp;gt;&lt;tt&gt;:&lt;/tt&gt;&amp;lt;Tolerance Color Space (0=CIELUV; 1=CIELAB)&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;where the &lt;i&gt;Color Space Id&lt;/i&gt; is expected to be an empty string to specify the usual (default) case and all of the &lt;i&gt;Parameter Elements&lt;/i&gt; (the &quot;2&quot; and the values in the &lt;tt&gt;&amp;lt;...&amp;gt;&lt;/tt&gt;s) may, technically, be omitted; they use: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;br&gt;or: &lt;br&gt;&lt;tt&gt;\e[&lt;/tt&gt;...&lt;tt&gt;38;2;&lt;/tt&gt;&amp;lt;Color Space Id&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Red&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Green&amp;gt;&lt;tt&gt;;&lt;/tt&gt;&amp;lt;Blue&amp;gt;&lt;tt&gt;;&lt;/tt&gt;...&lt;tt&gt;m&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;It is not possible to reliably detect the difference between these two so checking this option causes Mudlet to expect the last one with the additional (but empty!) parameter.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3375"/>
      <source>Expect Color Space Id in SGR...(3|4)8;2;...m codes</source>
      <translation>Expect Color Space Id in SGR...(3|4)8;2;...m codes</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3382"/>
      <source>Store character login passwords in:</source>
      <translation>Хранить пароли входа в персонаж в:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3408"/>
      <source>TextLabel</source>
      <translation>TextLabel</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2816"/>
      <source>TLS/SSL secure connection</source>
      <translation>Защищенное соединение</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3120"/>
      <source>Accept self-signed certificates</source>
      <translation>Принимать самоподписанные сертификаты</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3130"/>
      <source>Accept expired certificates</source>
      <translation>Принимать просроченные сертификаты</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2834"/>
      <source>Certificate</source>
      <translation>Сертификат</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2894"/>
      <source>Serial:</source>
      <translation>Серия:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2843"/>
      <source>Issuer:</source>
      <translation>Издатель:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2860"/>
      <source>Issued to:</source>
      <translation>Кому выдано:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2877"/>
      <source>Expires:</source>
      <translation>Истекает:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3140"/>
      <source>Accept all certificate errors       (unsecure)</source>
      <translation>Принимать все ошибки сертификата (небезопасно)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1847"/>
      <source>Report map issues on screen</source>
      <translation>Сообщить об проблем с картой на екране</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1861"/>
      <source>Copy map to other profile(s):</source>
      <translation>Скопировать карту на другой профиль(я):</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1877"/>
      <source>Press to pick destination(s)</source>
      <translation>Нажмите, чтобы выбрать место назначения(ий)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1890"/>
      <source>Copy to destination(s)</source>
      <translation>Копировать в пункт назначения(ий)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1902"/>
      <source>An action above happened</source>
      <translation>Произошло вышеуказанное действие</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1909"/>
      <source>Map format version:</source>
      <translation>Версия карты:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1934"/>
      <location filename="../src/ui/profile_preferences.ui" line="1938"/>
      <source># {default version}</source>
      <translation># {default version}</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1949"/>
      <source>Map download</source>
      <translation>Загрузка карты</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1971"/>
      <source>Download</source>
      <translation>Скачать</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1981"/>
      <source>Map view</source>
      <translation>Вид карты</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2010"/>
      <source>2D Map Room Symbol Font</source>
      <translation>Шрифт символов на 2D карте</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1990"/>
      <source>Use high quality graphics in 2D view</source>
      <translation>Использовать высокое качество графики в 2D виде</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="184"/>
      <source>&lt;p&gt;Can you help translate Mudlet?&lt;/p&gt;&lt;p&gt;If so, please visit: &lt;b&gt;https://www.mudlet.org/translate&lt;/b&gt;.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Можете ли вы помочь перевести Mudlet?&lt;/p&gt;&lt;p&gt;Если да, пожалуйста, посетите: &lt;b&gt;https://www.mudlet.org/translate&lt;/b&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1874"/>
      <source>&lt;p&gt;Select profiles that you want to copy map to, then press the Copy button to the right&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите профили, в которые вы хотите скопировать карту, а затем нажмите кнопку Скопировать справа&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1887"/>
      <source>&lt;p&gt;Copy map into the selected profiles on the left&lt;/p&gt;</source>
      <translation>&lt;p&gt;Копировать карту в выбранные профили слева&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="1955"/>
      <location filename="../src/ui/profile_preferences.ui" line="1968"/>
      <source>&lt;p&gt;On games that provide maps for download, you can press this button to get the latest map. Note that this will &lt;span style=&quot; font-weight:600;&quot;&gt;overwrite&lt;/span&gt; any changes you&apos;ve done to your map, and will use the new map only&lt;/p&gt;</source>
      <translation>&lt;p&gt;В играх, которые предоставляют карты для загрузки, вы можете нажать эту кнопку, чтобы получить последнюю карту. Обратите внимание, что это &lt;span style=&quot; font-weight:600;&quot;&gt;перезапишет&lt;/span&gt; любые изменения, которые вы сделали на вашей карте&apos;, и будет использовать только новую карту&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2000"/>
      <source>Show the default area in map area selection</source>
      <translation>Показать область по умолчанию в выборе области карты</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2020"/>
      <source>Only use symbols (glyphs) from chosen font</source>
      <translation>Использовать только символы (глифы) из выбранного шрифта</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2027"/>
      <source>Show symbol usage...</source>
      <translation>Показать использование символов...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2189"/>
      <source>Mapper colors</source>
      <translation>Цвета на маппере</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2195"/>
      <source>Select your color preferences for the map display</source>
      <translation>Выберите цветовые предпочтения для отображения карты</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2201"/>
      <source>Link color</source>
      <translation>Цвет ссылок</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2221"/>
      <source>Background color:</source>
      <translation>Цвет заднего плана:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3244"/>
      <source>Special Options</source>
      <translation>Специальные параметры</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3256"/>
      <source>Force compression off</source>
      <translation>Принудительно отключить компрессию</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3274"/>
      <source>Force telnet GA signal interpretation off</source>
      <translation>Принудительно отключить интерпретацию сигналов GA telnet</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3263"/>
      <source>This option adds a line line break &lt;LF&gt; or &quot;
&quot; to your command input on empty commands. This option will rarely be necessary.</source>
      <translation>Этот параметр добавляет разрыв строки &lt;LF&gt; или &quot;\n&quot; когда вы отправляете пустые команды. Этот вариант редко будет необходим.</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3267"/>
      <source>Force new line on empty commands</source>
      <translation>Добавлять новые линии на пустые команды</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3281"/>
      <source>Force MXP negotiation off</source>
      <translation>Отключить MXP</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2635"/>
      <source>Discord privacy</source>
      <translation>Конфиденциальность Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2668"/>
      <source>Don&apos;t hide small icon or tooltip</source>
      <translation>Не скрывать маленький значок и подсказку к нему</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2673"/>
      <source>Hide small icon tooltip</source>
      <translation>Скрыть подсказку к маленькому значку</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2678"/>
      <source>Hide small icon and tooltip</source>
      <translation>Скрыть маленький значок и подсказку к нему</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2700"/>
      <source>Hide timer</source>
      <translation>Скрыть таймер</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2723"/>
      <location filename="../src/ui/profile_preferences.ui" line="2736"/>
      <location filename="../src/ui/profile_preferences.ui" line="2752"/>
      <location filename="../src/ui/profile_preferences.ui" line="2768"/>
      <source>&lt;p&gt;Mudlet will only show Rich Presence information while you use this Discord username (useful if you have multiple Discord accounts). Leave empty to show it for any Discord account you log in to.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Mudlet будет только показать информацию в Discord если вы подключены с этим именем (полезно, если у вас несколько аккаунтов). Оставьте поле пустым, чтобы показывать для любого аккаунта.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2729"/>
      <source>Restrict to:</source>
      <translation>Ограничить к:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2642"/>
      <source>Don&apos;t hide large icon or tooltip</source>
      <translation>Не скрывать большой значок и подсказку к нему</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2647"/>
      <source>Hide large icon tooltip</source>
      <translation>Скрыть подсказку к большому значку</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2652"/>
      <source>Hide large icon and tooltip</source>
      <translation>Скрыть большой значок и подсказку к нему</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2707"/>
      <source>&lt;p&gt;Allow Lua to set Discord status&lt;/p&gt;</source>
      <translation>&lt;p&gt;Позволять Lua постановлять состояние Discord&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2710"/>
      <source>Enable Lua API</source>
      <translation>Включить API Lua</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2742"/>
      <source>specific Discord username</source>
      <translation>конкретное имя в Discord</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2686"/>
      <source>Hide state</source>
      <translation>Скрыть состояние</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2693"/>
      <source>Hide party details</source>
      <translation>Скрыть детали группы</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2660"/>
      <source>Hide detail</source>
      <translation>Скрыть деталь</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2564"/>
      <source>IRC client options</source>
      <translation>Параметры IRC-клиента</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2580"/>
      <source>irc.example.net</source>
      <translation>irc.example.net</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2587"/>
      <source>Port:</source>
      <translation>Порт:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2625"/>
      <source>#channel1 #channel2 #etc...</source>
      <translation>#канал1 #канал2 и т.д...</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2611"/>
      <source>MudletUser123</source>
      <translation>MudletUser123</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2570"/>
      <source>Server address:</source>
      <translation>Адрес сервера:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2618"/>
      <source>Auto-join channels: </source>
      <translation>Авто-присоединяться к каналам: </translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2604"/>
      <source>Nickname:</source>
      <translation>Ник:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2597"/>
      <source>6667</source>
      <translation>6667</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3338"/>
      <source>Search Engine</source>
      <translation>Поисковые системы</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3322"/>
      <source>Mudlet updates</source>
      <translation>Обновление Mudlet</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3328"/>
      <source>Disable automatic updates</source>
      <translation>Отключить автоматическое обновление</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3350"/>
      <source>Other Special options</source>
      <translation>Другие специальные параметры</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3356"/>
      <source>Show icons on menus</source>
      <translation>Отображать значки в меню</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="2810"/>
      <source>Connection</source>
      <translation>Подключение</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3150"/>
      <source>Connect to the game via proxy</source>
      <translation>Подключаться к игре через прокси</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3165"/>
      <source>Address</source>
      <translation>Адрес</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3185"/>
      <source>port</source>
      <translation>порт</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3195"/>
      <source>Username for logging into the proxy if requred</source>
      <translation>Имя пользователя для входа в прокси, если требуется</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3201"/>
      <source>username (optional)</source>
      <translation>имя пользователя (необязательно)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3211"/>
      <source>Password for logging into the proxy if requred</source>
      <translation>Пароль для входа в прокси, если требуется</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3217"/>
      <source>password (optional)</source>
      <translation>пароль (необязательно)</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3436"/>
      <source>Show debug messages for timers not smaller than:</source>
      <translation>Показывать отладочные сообщения для таймеров не меньше:</translation>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3442"/>
      <source>&lt;p&gt;Show &apos;LUA OK&apos; messages for Timers with the specified minimum interval (h:mm:ss.zzz), the minimum value (the default) shows all such messages but can render the &lt;i&gt;Central Debug Console&lt;/i&gt; useless if there is a very small interval timer running.&lt;/p&gt;</source>
      <comment>The term in &apos;...&apos; refer to a Mudlet specific thing and ought to match the corresponding translation elsewhere.</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3483"/>
      <source>Report all Codepoint problems immediately</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/profile_preferences.ui" line="3541"/>
      <source>Save</source>
      <translation>Сохранить</translation>
    </message>
  </context>
  <context>
    <name>room_exits</name>
    <message>
      <location filename="../src/ui/room_exits.ui" line="37"/>
      <source>General exits:</source>
      <translation>Обычные выходы:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="96"/>
      <source>NW exit...</source>
      <translation>Выход NW...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="106"/>
      <location filename="../src/ui/room_exits.ui" line="246"/>
      <location filename="../src/ui/room_exits.ui" line="386"/>
      <location filename="../src/ui/room_exits.ui" line="526"/>
      <location filename="../src/ui/room_exits.ui" line="669"/>
      <location filename="../src/ui/room_exits.ui" line="876"/>
      <location filename="../src/ui/room_exits.ui" line="1013"/>
      <location filename="../src/ui/room_exits.ui" line="1171"/>
      <location filename="../src/ui/room_exits.ui" line="1311"/>
      <location filename="../src/ui/room_exits.ui" line="1451"/>
      <location filename="../src/ui/room_exits.ui" line="1591"/>
      <location filename="../src/ui/room_exits.ui" line="1731"/>
      <source>&lt;p&gt;Set to a positive value to override the default (Room) Weight for using this Exit route, zero value assigns the default.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Задайте положительное значение, чтобы переопределить значение по умолчанию (Room) для использования этого маршрута выхода, нулевое значение назначает значение по умолчанию.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="236"/>
      <source>N exit...</source>
      <translation>Выход N...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="376"/>
      <source>NE exit...</source>
      <translation>Выход NE...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="516"/>
      <source>Up exit...</source>
      <translation>Выход вверх...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="659"/>
      <source>W exit...</source>
      <translation>Выход W...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="767"/>
      <source>ID:</source>
      <translation>ID:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="790"/>
      <source>Weight:</source>
      <translation>Вес:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="866"/>
      <source>E exit...</source>
      <translation>Выход E...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1003"/>
      <source>Down exit...</source>
      <translation>Выход вниз...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1155"/>
      <source>SW exit...</source>
      <translation>Выход SW...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1301"/>
      <source>S exit...</source>
      <translation>Выход S...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1441"/>
      <source>SE exit...</source>
      <translation>Выход SE...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1581"/>
      <source>In exit...</source>
      <translation>Выход в...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1721"/>
      <source>Out exit...</source>
      <translation>Выход из...</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1826"/>
      <source>Key:</source>
      <translation>Ключ:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1844"/>
      <source>No route</source>
      <translation>Нет маршрута</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1859"/>
      <source>Stub Exit</source>
      <translation>Незавершенный выход</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="67"/>
      <location filename="../src/ui/room_exits.ui" line="207"/>
      <location filename="../src/ui/room_exits.ui" line="347"/>
      <location filename="../src/ui/room_exits.ui" line="487"/>
      <location filename="../src/ui/room_exits.ui" line="627"/>
      <location filename="../src/ui/room_exits.ui" line="837"/>
      <location filename="../src/ui/room_exits.ui" line="974"/>
      <location filename="../src/ui/room_exits.ui" line="1120"/>
      <location filename="../src/ui/room_exits.ui" line="1272"/>
      <location filename="../src/ui/room_exits.ui" line="1412"/>
      <location filename="../src/ui/room_exits.ui" line="1552"/>
      <location filename="../src/ui/room_exits.ui" line="1692"/>
      <location filename="../src/ui/room_exits.ui" line="2057"/>
      <source>&lt;p&gt;Prevent a route being created via this exit, equivalent to an infinite exit weight.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Предотвратить создание маршрута через этот выход, эквивалентный бесконечному весу выхода.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="83"/>
      <location filename="../src/ui/room_exits.ui" line="223"/>
      <location filename="../src/ui/room_exits.ui" line="363"/>
      <location filename="../src/ui/room_exits.ui" line="503"/>
      <location filename="../src/ui/room_exits.ui" line="643"/>
      <location filename="../src/ui/room_exits.ui" line="853"/>
      <location filename="../src/ui/room_exits.ui" line="990"/>
      <location filename="../src/ui/room_exits.ui" line="1142"/>
      <location filename="../src/ui/room_exits.ui" line="1288"/>
      <location filename="../src/ui/room_exits.ui" line="1428"/>
      <location filename="../src/ui/room_exits.ui" line="1568"/>
      <location filename="../src/ui/room_exits.ui" line="1708"/>
      <source>&lt;p&gt;Create an exit in this direction with unknown destination, mutually exclusive with an actual exit roomID.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Создать выход в этом направлении с неизвестным назначением, взаимоисключающее с фактическим назначением.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="93"/>
      <source>&lt;p&gt;Set the number of the room northwest of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты к северо-западу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="119"/>
      <location filename="../src/ui/room_exits.ui" line="259"/>
      <location filename="../src/ui/room_exits.ui" line="399"/>
      <location filename="../src/ui/room_exits.ui" line="539"/>
      <location filename="../src/ui/room_exits.ui" line="682"/>
      <location filename="../src/ui/room_exits.ui" line="886"/>
      <location filename="../src/ui/room_exits.ui" line="1026"/>
      <location filename="../src/ui/room_exits.ui" line="1184"/>
      <location filename="../src/ui/room_exits.ui" line="1324"/>
      <location filename="../src/ui/room_exits.ui" line="1464"/>
      <location filename="../src/ui/room_exits.ui" line="1604"/>
      <location filename="../src/ui/room_exits.ui" line="1744"/>
      <source>&lt;p&gt;No door symbol is drawn on 2D Map for this exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;На двухмерной карте для этого выхода не отображается символ двери.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="138"/>
      <location filename="../src/ui/room_exits.ui" line="278"/>
      <location filename="../src/ui/room_exits.ui" line="418"/>
      <location filename="../src/ui/room_exits.ui" line="701"/>
      <location filename="../src/ui/room_exits.ui" line="905"/>
      <location filename="../src/ui/room_exits.ui" line="1203"/>
      <location filename="../src/ui/room_exits.ui" line="1343"/>
      <location filename="../src/ui/room_exits.ui" line="1483"/>
      <source>&lt;p&gt;Green (Open) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;bp&gt; Зелёный (открытый) символ дверцы нарисирован на двухмерной карте, может быть поставлен не незавершённый или готовый выход&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="154"/>
      <location filename="../src/ui/room_exits.ui" line="294"/>
      <location filename="../src/ui/room_exits.ui" line="434"/>
      <location filename="../src/ui/room_exits.ui" line="717"/>
      <location filename="../src/ui/room_exits.ui" line="921"/>
      <location filename="../src/ui/room_exits.ui" line="1219"/>
      <location filename="../src/ui/room_exits.ui" line="1359"/>
      <location filename="../src/ui/room_exits.ui" line="1499"/>
      <source>&lt;p&gt;Orange (Closed) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Оранжевая (закрытая) дверца нарисована на двухмерной карте.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="170"/>
      <location filename="../src/ui/room_exits.ui" line="310"/>
      <location filename="../src/ui/room_exits.ui" line="450"/>
      <location filename="../src/ui/room_exits.ui" line="733"/>
      <location filename="../src/ui/room_exits.ui" line="937"/>
      <location filename="../src/ui/room_exits.ui" line="1235"/>
      <location filename="../src/ui/room_exits.ui" line="1375"/>
      <location filename="../src/ui/room_exits.ui" line="1515"/>
      <source>&lt;p&gt;Red (Locked) door symbol is drawn on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Красный (заблокированный) символ дверцы нарисирован на двухмерной карте.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="233"/>
      <source>&lt;p&gt;Set the number of the room north of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты к северу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="373"/>
      <source>&lt;p&gt;Set the number of the room northeast of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты к северо-востоку от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="513"/>
      <source>&lt;p&gt;Set the number of the room up from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты вверх от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="558"/>
      <location filename="../src/ui/room_exits.ui" line="1045"/>
      <location filename="../src/ui/room_exits.ui" line="1623"/>
      <location filename="../src/ui/room_exits.ui" line="1763"/>
      <source>&lt;p&gt;A symbol is drawn with a green (Open) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Символ нарисован зеленым (открытый) цветом на 2D карте, может быть установлен либо на незавершенном, либо на реальном выходе.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="574"/>
      <location filename="../src/ui/room_exits.ui" line="1061"/>
      <location filename="../src/ui/room_exits.ui" line="1639"/>
      <location filename="../src/ui/room_exits.ui" line="1779"/>
      <source>&lt;p&gt;A symbol is drawn with an orange (Closed) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Символ нарисован оранжевым (закрытый) цветом на 2D карте, может быть установлен либо на незавершенном, либо на реальном выходе.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="590"/>
      <location filename="../src/ui/room_exits.ui" line="1077"/>
      <location filename="../src/ui/room_exits.ui" line="1655"/>
      <location filename="../src/ui/room_exits.ui" line="1795"/>
      <source>&lt;p&gt;A symbol is drawn with a red (Locked) fill color on 2D Map, can be set on either a stub or a real exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Символ нарисован красным (заблокирован) цветом на 2D карте, может быть установлен либо на незавершенном, либо на реальном выходе.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="653"/>
      <source>&lt;p&gt;Set the number of the room west of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты к западу от этого, будет синий для действительного числа или красный для недействительных.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="780"/>
      <source>&lt;p&gt;This is the Room ID Number for this room - it cannot be changed here!</source>
      <translation>&lt;p&gt;Это номер ID комнаты для этой комнаты - его нельзя изменить здесь!</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="803"/>
      <source>&lt;p&gt;This is the default weight for this room, which will be used for any exit &lt;i&gt;that leads to &lt;u&gt;this room&lt;/u&gt;&lt;/i&gt; which does not have its own value set - this value cannot be changed here.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Это значение по умолчанию для этого помещения, которое будет использоваться для любого выхода &lt;i&gt;, который ведет к &lt;u&gt;в этой комнате&lt;/u&gt;&lt;/i&gt;, у которого нет собственного набора значений-это значение нельзя изменить здесь.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="863"/>
      <source>&lt;p&gt;Set the number of the room east of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты к востоку от этой, будет синий для действительного числа или красный для недействительных.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1000"/>
      <source>&lt;p&gt;Set the number of the room down from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Установите номер комнаты снизу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1152"/>
      <source>&lt;p&gt;Set the number of the room southwest of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Установите номер комнаты к юго-западу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1298"/>
      <source>&lt;p&gt;Set the number of the room south of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты к югу от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1438"/>
      <source>&lt;p&gt;Set the number of the room southeast of this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты к юго-востоку от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1578"/>
      <source>&lt;p&gt;Set the number of the room in from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Установите номер комнаты внутри от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1718"/>
      <source>&lt;p&gt;Set the number of the room out from this one, will be blue for a valid number or red for invalid.&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Установите номер комнаты снаружи от этой комнаты, будет синим для допустимого числа или красным для недопустимого.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1871"/>
      <source>&lt;p&gt;Set the number of the room that&apos;s to the southwest here.&lt;/p&gt;</source>
      <translation>&lt;p&gt;установите номер комнаты к юго-западу отсюда.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1874"/>
      <source>Exit RoomID number</source>
      <translation>Выход К</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1901"/>
      <source>No door</source>
      <translation>Нет двери</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1916"/>
      <source>Open door</source>
      <translation>Открытая дверь</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1928"/>
      <source>Closed door</source>
      <translation>Закрытая дверь</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1940"/>
      <source>Locked door</source>
      <translation>Запертая дверь</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1975"/>
      <source>&lt;p&gt;Use this button to save any changes, will also remove any invalid Special exits.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Эта кнопка позволяет сохранить все изменения, а также удалит любые недопустимые специальные выходы.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1991"/>
      <source>&lt;p&gt;Use this button to close the dialogue without changing anything.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Используйте эту кнопку, чтобы закрыть диалог, ничего не меняя.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2010"/>
      <source>&lt;p&gt;Click on an item to edit/change it, to DELETE a Special Exit set its Exit Room ID to zero.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите на элемент, чтобы отредактировать/изменить его, чтобы УДАЛИТЬ специальный выход установите его ID комнаты выхода на ноль.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2048"/>
      <source>&lt;p&gt;Set the number of the room that this exit leads to, if set to zero the exit will be removed on saving the exits.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите номер комнаты куда этот выход идёт. Чтобы убрать выход, поставте ноль.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2075"/>
      <source>&lt;p&gt;No door symbol is drawn on 2D Map for this exit (only functional choice currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;В двухмерной карте для данного выхода не отображается символ двери (в настоящее время единственный выбор).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2084"/>
      <source>&lt;p&gt;Green (Open) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Зелёный (открытый) символ дверцы будет нарисан на двухмерной карте (но не в данный момент).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2093"/>
      <source>&lt;p&gt;Orange (Closed) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Оранжевая (закрытая) дверца будет нарисована на двухмерной карте (но не в данный момент).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2102"/>
      <source>&lt;p&gt;Red (Locked) door symbol would be drawn on 2D Map (but not currently).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Красный (заблокированный) символ дверцы будет нарисирован на двухмерной карте (но не в данный момент).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2111"/>
      <source>&lt;p&gt;(Lua scripts need to be prefixed with &quot;script:&quot;).&lt;/p&gt;</source>
      <translation>&lt;p&gt;(Lua скрипты должны быть с префиксом &quot;script:&quot;).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2128"/>
      <source>&lt;p&gt;Add an empty item to Special exits to be edited as required.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Добавить пустой элемент в специальные выходы для редактирования по мере необходимости.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2147"/>
      <source>&lt;p&gt;Press this button to deactivate the selection of a Special exit.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите эту кнопку, чтобы отменить выбор специального выхода.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1978"/>
      <source>&amp;Save</source>
      <translation>&amp;Сохранить</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1886"/>
      <source>Exit Weight (0=No override)</source>
      <translation>Вес выхода (0 = Без переопределения)</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="1994"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Отменить</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2001"/>
      <source>Special exits:</source>
      <translation>Специальные выходы:</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2044"/>
      <source>Exit
Room ID</source>
      <translation>Выход
ID комнаты</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2053"/>
      <source>No
Route</source>
      <translation>Нет маршрута</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2062"/>
      <source>Exit
Weight</source>
      <translation>Вес
выхода</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2066"/>
      <source>&lt;p&gt;Set to a positive integer value to override the default (Room) Weight for using this Exit route, a zero value assigns the default.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Установите положительное целое значение, чтобы переопределить значение по умолчанию (Room) для использования этого выхода, ноль означает значение по умолчанию.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2071"/>
      <source>Door
None</source>
      <translation>Дверь
Нет</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2080"/>
      <source>Door
Open</source>
      <translation>Дверь
Открыта</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2089"/>
      <source>Door
Closed</source>
      <translation>Дверь
Закрыта</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2098"/>
      <source>Door
Locked</source>
      <translation>Дверь
Заперта</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2107"/>
      <source>Command
or LUA script</source>
      <translation>Команда или скрипт Lua</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2131"/>
      <source>&amp;Add special exit</source>
      <translation>Добавить специальный выход</translation>
    </message>
    <message>
      <location filename="../src/ui/room_exits.ui" line="2150"/>
      <source>&amp;End S. Exits editing</source>
      <translation>Выход из р&amp;едактирования выходов</translation>
    </message>
  </context>
  <context>
    <name>room_symbol</name>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="14"/>
      <location filename="../src/ui/room_symbol.ui" line="112"/>
      <source>Room symbol</source>
      <translation>Символ комнаты</translation>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="141"/>
      <source>Color of to use for the room symbol(s)</source>
      <translation>Цвет символа комнаты</translation>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="147"/>
      <source>Symbol color</source>
      <translation>Цвет символа</translation>
    </message>
    <message>
      <location filename="../src/ui/room_symbol.ui" line="154"/>
      <source>Reset</source>
      <translation>Сброс</translation>
    </message>
  </context>
  <context>
    <name>scripts_main_area</name>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="23"/>
      <source>Name:</source>
      <translation>Имя:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="33"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your script or script group. This will be displayed in the script tree.&lt;/p&gt;&lt;p&gt;If a function within the script is to be used to handle events entered in the list below &lt;b&gt;&lt;u&gt;it must have the same name as is entered here.&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;</source>
      <translation>&lt;bp&gt;Выберите хорошее (в идеале уникальное) имя для скрипта или группы скриптов. Это будет показано в списке скриптов.&lt;b/p&gt;&lt;bp&gt;Если функция в скрипте будет использоваться в обработке событий, то имя скрипта должно быть тоже самое как и у функции.&lt;b/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="40"/>
      <source>Registered Event Handlers:</source>
      <translation>Зарегистрированные обработчики событий:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="88"/>
      <source>&lt;p&gt;Remove (selected) event handler from list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Удалить (выбранный) обработчик событий из списка.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="91"/>
      <source>-</source>
      <translation>-</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="98"/>
      <source>Add User Event Handler:</source>
      <translation>Добавить обработчик событий:</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="133"/>
      <source>&lt;p&gt;Add entered event handler name to list.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Добавить введенное имя обработчика событий в список.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/scripts_main_area.ui" line="136"/>
      <source>+</source>
      <translation>+</translation>
    </message>
  </context>
  <context>
    <name>set_room_area</name>
    <message>
      <location filename="../src/ui/set_room_area.ui" line="14"/>
      <source>Move rooms to another area</source>
      <translation>Переместить комнаты в другую область</translation>
    </message>
    <message>
      <location filename="../src/ui/set_room_area.ui" line="20"/>
      <source>Which area would you like to move the room(s) to?</source>
      <translation>В какую область вы бы хотели переместить комнату(ы)?</translation>
    </message>
  </context>
  <context>
    <name>source_editor_area</name>
    <message>
      <location filename="../src/ui/source_editor_area.ui" line="26"/>
      <source>Form</source>
      <translation>Форма</translation>
    </message>
  </context>
  <context>
    <name>timers_main_area</name>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="29"/>
      <source>Name:</source>
      <translation>Имя:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="64"/>
      <source>Command:</source>
      <translation>Команда:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="134"/>
      <source>&lt;p&gt;milliseconds&lt;/p&gt;</source>
      <translation>&lt;p&gt;милисекундах&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="169"/>
      <source>Time:</source>
      <translation>Время:</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="39"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your timer, offset-timer or timer group. This will be displayed in the timer tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите хорошее (в идеале уникальное) имя для таймера или группы таймеров. Это будет показано в списке таймеров.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="74"/>
      <source>&lt;p&gt;Type in one or more commands you want the timer to send directly to the game when the time has elapsed. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="77"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Текст для отправки в игру как есть (опционально)</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="89"/>
      <source>&lt;p&gt;hours&lt;/p&gt;</source>
      <translation>&lt;p&gt;часов&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="104"/>
      <source>&lt;p&gt;minutes&lt;/p&gt;</source>
      <translation>&lt;p&gt;минут&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="119"/>
      <source>&lt;p&gt;seconds&lt;/p&gt;</source>
      <translation>&lt;p&gt;секунд&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="184"/>
      <source>&lt;p&gt;The &lt;b&gt;hour&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Часовой&lt;/b&gt; интервал на котором таймер срабатывает.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="392"/>
      <source>&lt;p&gt;The &lt;b&gt;millisecond&lt;/b&gt; part of the interval that the timer will go off at (1000 milliseconds = 1 second).&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Миллисекундная&lt;/b&gt; часть интервала на котором таймер срабатывает (1000мс = 1 секунда).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="260"/>
      <source>&lt;p&gt;The &lt;b&gt;minute&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Минутный&lt;/b&gt; интервал на котором таймер срабатывает.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/timers_main_area.ui" line="326"/>
      <source>&lt;p&gt;The &lt;b&gt;second&lt;/b&gt; part of the interval that the timer will go off at.&lt;/p&gt;</source>
      <translation>&lt;p&gt;&lt;b&gt;Вторая&lt;/b&gt; часть интервала, на которой таймер будет срабатывать.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>trigger_editor</name>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="152"/>
      <location filename="../src/ui/trigger_editor.ui" line="200"/>
      <location filename="../src/ui/trigger_editor.ui" line="245"/>
      <location filename="../src/ui/trigger_editor.ui" line="290"/>
      <location filename="../src/ui/trigger_editor.ui" line="335"/>
      <location filename="../src/ui/trigger_editor.ui" line="380"/>
      <location filename="../src/ui/trigger_editor.ui" line="428"/>
      <location filename="../src/ui/trigger_editor.ui" line="590"/>
      <source>1</source>
      <translation>1</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="436"/>
      <source>Show normally hidden variables</source>
      <translation>Показать скрытые переменные</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="476"/>
      <source>&lt;p&gt;Enter text here to search through your code.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Введите текст для поиска по вашему коду.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_editor.ui" line="510"/>
      <source>&lt;p&gt;Toggles the display of the search results area.&lt;/p&gt;</source>
      <translation>&lt;p&gt;переключает отображения результатов поиска.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>trigger_main_area</name>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="65"/>
      <source>Name:</source>
      <translation>Имя:</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="85"/>
      <source>&lt;p&gt;Use this control to show or hide the extra controls for the trigger; this can be used to allow more space to show the trigger &lt;i&gt;items&lt;/i&gt; on smaller screen.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Используйте этот контроль для отображения или скрытия дополнительных элементов управления для триггера; это может использоваться для отображения большего количества места для отображения триггера &lt;i&gt;элементов&lt;/i&gt; на меньшем экране.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="111"/>
      <source>Command:</source>
      <translation>Команда:</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="127"/>
      <source>Text to send to the game as-is (optional)</source>
      <translation>Текст для отправки в игру как есть (опционально)</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="201"/>
      <source>&lt;p&gt;The trigger will only fire if &lt;u&gt;all&lt;/u&gt; conditions on the list have been met within the specified line delta, and captures will be saved in &lt;tt&gt;multimatches&lt;/tt&gt; instead of &lt;tt&gt;matches&lt;/tt&gt;.&lt;/p&gt;
&lt;p&gt;If this option is &lt;b&gt;not&lt;/b&gt; set the trigger will fire if &lt;u&gt;any&lt;/u&gt; condition on the list have been met.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="208"/>
      <source>AND / Multi-line (delta)</source>
      <translation>И / Многострочный (дельта)</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="260"/>
      <source>&lt;p&gt;When checked, only the filtered content (=capture groups) will be passed on to child triggers, not the initial line (see manual on filters).&lt;/p&gt;</source>
      <translation>&lt;p&gt;Если этот флажок установлен, дочерним триггерам будет передаваться только отфильтрованное содержимое (что в группах захвата), а не начальная строка (см. руководство по фильтрам).&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="266"/>
      <source>only pass matches</source>
      <translation>только пропускать совпадения</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="302"/>
      <source>Do not pass whole line to children.</source>
      <translation>Не передавать всю линию детям.</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="324"/>
      <source>&lt;p&gt;Choose this option if you want to include all possible matches of the pattern in the line.&lt;/p&gt;&lt;p&gt;Without this option, the pattern matching will stop after the first successful match.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите эту опцию, если вы хотите включить все возможные совпадения шаблона в строке.&lt;/p&gt;&lt;p&gt; Без этой опции, поиск остановится после первого успешного совпадания.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="415"/>
      <source>&lt;p&gt;Keep firing the script for this many more lines, after the trigger or chain has matched.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Исполнять скрипт еще столько строк, после того как триггер или цепочка совпали.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="421"/>
      <source>fire length (extra lines)</source>
      <translation>быть открытым # строк</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="479"/>
      <source>&lt;p&gt;Play a sound file if the trigger fires.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Играть звуковой файл при срабатывании триггера.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="524"/>
      <source>&lt;p&gt;Use this to open a file selection dialogue to find a sound file to play when the trigger fires.&lt;/p&gt;
&lt;p&gt;&lt;i&gt;Cancelling from the file dialogue will not make any changes; to clear the file use the clear button to the right of the file name display.&lt;/i&gt;&lt;/p&gt;</source>
      <comment>This is the button used to select a sound file to be played when a trigger fires.</comment>
      <extracomment>Please ensure the text used here is duplicated within the tooltip for the QLineEdit that displays the file name selected.</extracomment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="528"/>
      <source>Choose file...</source>
      <translation>Выбрать файл...</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="559"/>
      <source>no file</source>
      <translation>нет файла</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="620"/>
      <source>&lt;p&gt;Enable this to highlight the matching text by changing the fore and background colors to the ones selected here.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Включите эту опцию, чтобы выделить соответствующий текст, изменив цвета переднего и заднего фона на выбранные здесь.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="663"/>
      <source>Background</source>
      <translation>Задний план</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="679"/>
      <location filename="../src/ui/triggers_main_area.ui" line="692"/>
      <source>keep</source>
      <comment>Keep the existing colour on matches to highlight. Use shortest word possible so it fits on the button</comment>
      <translation>оставить</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="653"/>
      <source>Foreground</source>
      <translation>Передний план</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="482"/>
      <source>play sound</source>
      <translation>играть звук</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="78"/>
      <source>&lt;p&gt;Choose a good, (ideally, though it need not be, unique) name for your trigger or trigger group. This will be displayed in the trigger tree.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Выберите хорошее, (в идеале уникальное) имя для триггера или группы триггеров. Оно будет показано в списке всех триггеров.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="124"/>
      <source>&lt;p&gt;Type in one or more commands you want the trigger to send directly to the game if it fires. (Optional)&lt;/p&gt;&lt;p&gt;To send more complex commands, that could depend on or need to modifies variables within this profile a Lua script should be entered &lt;i&gt;instead&lt;/i&gt; in the editor area below.  Anything entered here is, literally, just sent to the game server.&lt;/p&gt;&lt;p&gt;It is permissable to use both this &lt;i&gt;and&lt;/i&gt; a Lua script - this will be sent &lt;b&gt;before&lt;/b&gt; the script is run.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="247"/>
      <source>&lt;p&gt;Within how many lines must all conditions be true to fire the trigger?&lt;/p&gt;</source>
      <translation>&lt;p&gt;В сколько линий должны все шаблоны совпасть, чтобы триггер совпал?&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="330"/>
      <source>match all</source>
      <translation>совпадать на всё</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="360"/>
      <source>Match all occurrences of the pattern in the line.</source>
      <translation>Соответствовать всем совпаданиям шаблона в строке.</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="463"/>
      <source>&lt;p&gt;How many more lines, after the one that fired the trigger, should be passed to the trigger&apos;s children?&lt;/p&gt;</source>
      <translation>&lt;p&gt;Сколько еще строк, после той, которая совпала на триггер, должны быть переданы потомкам триггера?&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="550"/>
      <source>&lt;p&gt;Sound file to play when the trigger fires.&lt;/p&gt;</source>
      <comment>This is the tooltip for the QLineEdit that shows - but does not permit changing - the sound file used for a trigger.</comment>
      <translation>&lt;p&gt;Звуковой файл, который будет играть при срабатывании.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="572"/>
      <source>&lt;p&gt;Click to remove the sound file set for this trigger.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Нажмите, чтобы удалить звуковой файл, установленный для этого триггера.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/triggers_main_area.ui" line="626"/>
      <source>highlight</source>
      <translation>подсветка</translation>
    </message>
  </context>
  <context>
    <name>trigger_pattern_edit</name>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="124"/>
      <source>Foreground color ignored</source>
      <translation>Цвет переднего плана игнорируется</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="148"/>
      <source>Background color ignored</source>
      <translation>Цвет заднего плана игнорируется</translation>
    </message>
    <message>
      <location filename="../src/ui/trigger_pattern_edit.ui" line="175"/>
      <source>match on the prompt line</source>
      <translation>матч на оперативную линию</translation>
    </message>
  </context>
  <context>
    <name>vars_main_area</name>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="109"/>
      <source>Name:</source>
      <translation>Имя:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="175"/>
      <source>⏴ Key type:</source>
      <translation>⏴ Тип ключа:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="125"/>
      <source>&lt;p&gt;Set the &lt;i&gt;global variable&lt;/i&gt; or the &lt;i&gt;table entry&lt;/i&gt; name here. The name has to start with a letter, but can contain a mix of letters and numbers.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Задайте здесь имя глобальной переменной или ключа таблицы. Имя должно начинаться с буквы, но может содержать сочетание букв и цифр.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="138"/>
      <source>&lt;p&gt;Tables can store values either in a list, and/or a hashmap.&lt;/p&gt;&lt;p&gt;In a &lt;b&gt;list&lt;/b&gt;, &lt;i&gt;unique indexed keys&lt;/i&gt; represent values - so you can have values at &lt;i&gt;1, 2, 3...&lt;/i&gt;&lt;/p&gt;&lt;p&gt;In a &lt;b&gt;map&lt;/b&gt; {a.k.a. an &lt;i&gt;associative array}&lt;/i&gt;, &lt;i&gt;unique keys&lt;/i&gt; represent values - so you can have values under any identifier you would like (theoretically even a function or other lua entity although this GUI only supports strings).&lt;/p&gt;&lt;p&gt;This, for a newly created table (group) selects whenever you would like your table to be an indexed or an associative one.&lt;/p&gt;&lt;p&gt;In other cases it displays other entities (&lt;span style=&quot; font-style:italic;&quot;&gt;functions&lt;/span&gt;) which cannot be modifed from here.&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="51"/>
      <location filename="../src/ui/vars_main_area.ui" line="145"/>
      <source>Auto-Type</source>
      <translation>Авто-Тип</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="128"/>
      <source>Variable name ...</source>
      <translation>Имя переменной ...</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="150"/>
      <source>key (string)</source>
      <translation>ключ (текст)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="155"/>
      <source>index (integer)</source>
      <translation>индекс (целое число)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="71"/>
      <location filename="../src/ui/vars_main_area.ui" line="160"/>
      <source>table</source>
      <translation>таблица</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="165"/>
      <source>function
(cannot create
from GUI)</source>
      <translation>функция
(невозможно создать
из GUI)</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="185"/>
      <source>&lt;p&gt;If checked this item (and its children, if applicable) does not show in area to the left unless &lt;b&gt;Show normally hidden variables&lt;/b&gt; is checked.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Если флажок установлен, это переменное (и его дети, если есть) не отображается в области слева, кроме когда не установлен флажок &lt;b&gt;Показать обычно скрытые переменные&lt;/b&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="188"/>
      <source>hidden variable</source>
      <translation>скрытая переменная</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="84"/>
      <source>⏷ Value type:</source>
      <translation>⏷ Значение:</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="56"/>
      <source>string</source>
      <translation>string</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="61"/>
      <source>number</source>
      <translation>number</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="66"/>
      <source>boolean</source>
      <translation>boolean</translation>
    </message>
    <message>
      <location filename="../src/ui/vars_main_area.ui" line="76"/>
      <source>function</source>
      <translation>function</translation>
    </message>
  </context>
</TS>
