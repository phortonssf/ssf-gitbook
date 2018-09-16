# Writing is nice
{% exercise %}
Define a variable `x` equal to 10.

{% initial %}
var x =

{% solution %}
var x = 10;

{% validation %}
assert(x == 10);

{% context %}
// This is context code available everywhere
// The user will be able to evaluate `exposedVar`
var exposedVar = 3;
// ... or call `exposedFunction`
function exposedFunction {
    return 3;
}
{% endexercise %}
{% tabs first="First Tab", second="Second Tab", third="Third Tab" %}

{% content "first" %}
testing

{% content "second" %}
Content for second tab ...

{% content "third" %}
Content for third tab ...

{% endtabs %}

