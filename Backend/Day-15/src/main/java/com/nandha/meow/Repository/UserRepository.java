package com.nandha.meow.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import com.nandha.meow.Entity.UserSignupEntity;

@Repository

public interface UserRepository extends JpaRepository<UserSignupEntity,Integer>{

	
//		@Query("select cre.password from SignUp cre where cre.username=?1")
//		Iterable<UserSignupEntity> findAllUsernamePassword( String username);
	}
