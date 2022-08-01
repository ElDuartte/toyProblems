def jumbled_string(s, n)
  s = s.chars
  iteration = [s]
  loop do
    s = (0...s.size).step(2).map { |i| s[i] } + (1...s.size).step(2).map { |i| s[i] }
    break if s == iteration[0]
    iteration << s
  end
  iteration[n % iteration.size].join
end