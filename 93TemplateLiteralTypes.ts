type World = "world";
 
type Greeting = `hello ${World}`;

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// Uppercase<StringType>

type Greetingg1 = "Hello, world"
type ShoutyGreeting = Uppercase<Greetingg1>

// Lowercase<StringType>

type Greetingg2 = "Hello, world"
type QuietGreeting = Lowercase<Greetingg2>

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">

// Capitalize<StringType>

type LowercaseGreeting = "hello, world";
type Greetingg3 = Capitalize<LowercaseGreeting>;
     
// Uncapitalize
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;

export {};