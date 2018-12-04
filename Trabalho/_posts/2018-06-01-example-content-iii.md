---
layout: post
title: example-content-ii
slug: trabalho
menu: false
order: 1
description: >
---

## Funções holomórficas, continuação analítica e introdução à função Gamma e a função zeta de Riemann

Para introduzir continuação analítica e posteriormente a função zeta de
Riemann começaremos por explicar o que é uma série geométrica.

Uma série geométrica é uma série que tem um rácio constante entre
termos. As suas somas parciais são dadas por:

\$$ S_n=1+z+z^2+z^3+⋯+z^n $$

(1)
{: style="text-align: right"}

Multiplicando (1) por *z* e adicionando 1 vemos que:

\$$ zS_n+1=1+z+z^2+z^3+⋯+z^n+z^(n+1)= S_n+z^{(n+1)} $$

O que é equivalente a:

\$$ S_n={\dfrac{(z^{(n+1)}-1)}{(z-1)}} $$

(2)
{: style="text-align: right"}

Quando $$ {\vert z \vert <1} $$:

\$$ \lim_{n\to\infty}S_n = S = {\dfrac{1}{1-z}}$$

(3)
{: style="text-align: right"}

Chegando a este ponto, falaremos agora de funções holomórficas e
mais tarde retomaremos o raciocínio inicial.

Funções holomórficas são funções de domínio $$ f:C→C $$ com uma ou
mais variáveis complexas, tais que, são complexamente diferenciáveis
na vizinhança de um ponto qualquer $$ z_0 $$. Desta forma qualquer função
holomórfica pode ser representada pela sua série de Taylor à
volta de $$ z+z_0 $$:

\$$ f(z+z_0)=f(z_0 )+{\dfrac{(f'(z_0))}{1!}}z+{\dfrac{(f''(z_0))}{2!}}z^2+⋯ $$

Contudo, esta série de Taylor só converge, para funções
meromórficas<sup>1</sup> ,num círculo de raio igual à distância
entre z_0 e o polo mais próximo.

<sup>1</sup>Uma função meromórfica é uma função holomórfica em todo o seu
domínio, exceto para um conjunto discreto de pontos isolados,
que são polos da função.
{:.faded}

Como vimos antes, para números reais, vemos que a série S converge
para valores de *z* entre 0 e 1. Para números complexos, é a mesma coisa
mas tal que $$ 0<|z|<1 $$. Como é convergente neste raio, podemos dizer que
a série é holomórfica

Tendo esta informação em mente e voltado à série geométrica vemos que,
se $$ z_0=0 $$ então a sua série de Taylor converge apenas num círculo
de raio 1, no plano complexo (ver figura 1).

Mas, se utilizarmos o conhecimento que temos, podemos ir mais além
do que apenas este círculo.

Para começar vamos escolher um ponto $$ z_0 $$ que não seja 0 mas que
esteja contido no circulo.  Sabemos que, pela definição de função
holomórfica, que de qualquer ponto $$ z_0 $$, vai haver um círculo à
volta deste ponto de raio igual à distância entre $$ z_0 $$ e o polo mais
próximo, que neste caso é $$ z=1 $$. Se escolhermos, $$ z_0=\dfrac {1}{4}+\dfrac {1}{2} i $$
esta será convergente num círculo de raio $$ \dfrac {\sqrt {13}}{4} $$(ver figura 2).

![Full-width image](ttps://skyborgff.github.io/Trabalho/f1.png){:.lead data-width="1059" data-height="1033"}
Figura 1-Série convergente 1
{:.figure}

![Full-width image](https://skyborgff.github.io/Trabalho/f2.png){:.lead data-width="19" data-height="1033"}
Figura 2-Série convergente 2
{:.figure}

Para completar o raciocínio basta escolher um ponto que esteja no
segundo círculo criado e que não esteja no primeiro. Por exemplo,
$$ z_0= \dfrac {1}{2}+i $$ criará um círculo de raio
$$ \dfrac {\sqrt {5}}{2} $$ (ver figura 3).

![Full-width image](ttps://skyborgff.github.io/Trabalho/f3.png){:.lead data-width="19" data-height="1033"}
Figura 3-Série convergente 3
{:.figure}

Usando este método repetidamente, podemos expandir o domínio da
função para qualquer valor no plano complexo exceto $$ z=1 $$.

Este é um exemplo fácil, mas que dá uma visão geral para o que pode
ser feito com esta ferramenta.

Dois dos exemplos mais conhecidos em matemática em que se fez
continuação analítica são a função Gamma e a função zeta de Riemann.

A função Gamma é resultado da continuação analítica da definição de
n fatorial. A função é representada por:

\$$ \Gamma (z)=(z-1)!= \int _0^{+ \inf } x^{(z-1)} e^{(-x)} dx $$

Esta função é estendida a todos os números reais e complexos exceto
os números inteiros negativos em que a função tem polos simples.

![Full-width image](https://skyborgff.github.io/Trabalho/f4.png){:.lead data-width="800" data-height="100"}
Figura 4 – Função Gamma em $$ \mathbb{R} $$
{:.figure}

![Full-width image](https://skyborgff.github.io/Trabalho/f5.png){:.lead data-width="800" data-height="100"}
Figura 5 – Módulo da função Gamma em $$ \mathbb{C} $$
{:.figure}

A função Gamma é muito importante pois ajuda em vários ramos tanto da
matemática como da física matemática. Por exemplo, a função Gamma ajuda
a integrar certas funções, calcular produtos e produtórios e em Teoria
de números analíticos.

Nesta última aplicação, a própria função Gamma tem uma utilização
profunda e extremamente interessante que é a de permitir que se faça
continuação analítica à função zeta de Riemann.

A função zeta de Riemann é definida como sendo uma generalização das
séries de Dirichlet para números complexos:

\$$ \zeta (s)^{(2)} =\sum_{n=1}^{+ \infty }  \dfrac {1}{n^s}   ,Re(z) ≠ 1 $$

<sup>2</sup>A utilização da letra s para um número complexo é simplesmente uma
homenagem feita a Bernhard Riemann porque este introduziu a função
com a letra s no seu artigo
*“Monatsberichte der Königlich Preußischen Akademie der Wissenschaften zu Berlin”*
(On the Number of Primes Less Than a Given Magnitude).
{:.faded}

Foi descoberta uma relação pelo matemático Riemann que lhe permitiu
fazer continuação analítica:

\$$ \Gamma (\dfrac {s}{2})=\zeta (s)\pi^{- \frac {s}{2}}= \Gamma( \dfrac {1-s}{2} ) \zeta(1-s) \pi^{- \frac {1-s}{2}} $$

Esta função tem propriedades, para dizer no mínimo, interessantes
(depois de ser continuada analiticamente).

Um dos seus resultados mais conhecidos é:

\$$ \zeta (-1) = 1+2+3+4+ \dots = - \dfrac {1}{12} $$

que, por mais bizarro que pareça, é usado em certos contextos
como, por exemplo, a teoria das cordas, em física teórica. Outro
dos resultados mais conhecidos foi calculado por Leonhard Euler
ao resolver o problema de Basel<sup>3</sup>:

<sup>3</sup>Existe uma prova extremamente elegante sobre este
problema que foi explicada e visualizada pelo canal do youtube
3blue1brown sobre o problema de
Basel -
<a href="https://www.youtube.com/watch?v=d-o3eB9sfls&t">https://www.youtube.com/watch?v=d-o3eB9sfls&t</a>
.
{:.faded}

\$$ \zeta (2) = 1+ \dfrac{1}{4}+ \dfrac{1}{9}+ \dfrac{1}{16}+ \dots = \dfrac {\pi^2}{6} $$

A função tem várias formas de ser expressa mas, neste contexto, esta é
a mais adequada:

\$$ \zeta (z) = \dfrac {\Gamma(1-z)}{2 \pi i} {\displaystyle \oint_{\gamma} } \dfrac {u^{z-1}}{e^{-u}-1} du $$

em que γ está representada na figura 7.
Uma representação possível desta função está feita na figura 6.

![Full-width image](https://skyborgff.github.io/Trabalho/f6.png){:.lead data-width="800" data-height="100"}
Figura 6-Função Zeta de Riemann
{:.figure}

![Full-width image](https://skyborgff.github.io/Trabalho/f7.png){:.lead data-width="800" data-height="100"}
Figura 7-Curva para calcular o integral de curva
{:.figure}

A parte interessante desta função é que esta não está definida para
$$Re(z) = 1 $$. Entre $$Re(z) = 0$$ e $$Re(z) =1$$ existe uma “tira”
chamada critical strip. Riemann criou uma conjetura<sup>4</sup> em que
afirma que todos os zeros não triviais da função estão na
linha $$Re(z) =\dfrac{1}{2}$$ (os zeros triviais da função são os
zeros $$z=-2,-4,-6,\dots $$).

<sup>4</sup>A conjetura de Riemann é um dos Millennium Problems.
Se alguém o provar ou encontrar um contraexemplo ganhará um
prémio de 1.000.000 $.
{:.faded}

Até agora, ninguém conseguiu provar formalmente esta conjetura,
mas sabe-se que esta é verdadeira para os primeiros $$ 10^{13}$$ zeros.

Na figura 8, em baixo, está representado o módulo da
função $$ \zeta (x+yi) $$ em função de $$x$$ e de $$y$$. Vemos que a
quantidade de “picos” diminui monotonamente<sup>5</sup> entre $$0<x<1$$.
De qualquer forma isto não é uma coincidência já que esta diminuição
monótona está de acordo com a conjetura que Riemann propôs.

<sup>5</sup>Uma função que diminui monotonamente, é uma função tal que
se $$x_1\leqslant x_2$$ então $$f(x_1)\geqslant f(x_2)$$,
ou seja, $$f'(x)\leqslant 0$$.
{:.faded}

![Full-width image](https://skyborgff.github.io/Trabalho/trabalho/f8.png){:.lead data-width="800" data-height="100"}
Figura 8-Módulo da função zeta
{:.figure}

![Full-width image](https://skyborgff.github.io/Trabalho/trabalho/f9.png){:.lead data-width="800" data-height="100"}
Figura 9-Função Zeta  na linha vertical $$Re(z) =\dfrac {1}{2}$$
{:.figure}


